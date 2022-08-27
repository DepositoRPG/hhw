//=============================================================================
// TRP_SkitExAutoShow.js
//=============================================================================
// Copyright (c) 2019 Thirop
//============================================================================= 



//=============================================================================
/*:
 * @plugindesc TRP_Skitに立ち絵の自動表示/非表示機能を追加
 * @author Thirop
 * @help
 * TRP_Skit.jsの下に配置
 * TRP_Skit本体はversion1.08以上を対象
 * (おまけパッチのため動作保証はありません。) 
 *
 * オートモードをONにすることで（導入時はON）
 * セリフの発言者を検知して以下のような機能が自動化されます。
 * ・自動でスキットの開始（skit start）
 * ・発言キャラの立ち絵の表示
 * ・立ち絵表示数があぶれたときに自動退出
 * ・イベント終了時にスキットの終了(skit end)
 *
 *
 *
 * 【プラグインコマンド】
 * □skit auto true
 * 自動表示制御を有効化
 *
 * □skit auto false
 * 自動表示制御を無効化
 *
 * 【登場/退出コマンドの設定】
 * プラグイン設定にて表示/退出に用いるコマンドを設定できます。
 * 登場/退出のマクロコマンドも指定可能です。
 * 
 * 【表示位置の設定】
 * プラグイン設定「表示位置の優先順」にて設定できます。
 * 立ち絵を表示する位置・表示数を設定できます。
 * 
 * 例）
 * left：左に１キャラのみ表示
 * right：右に１キャラのみ表示
 * center：中央に１キャラのみ表示
 * left,right：左→右の順に２キャラまで表示
 * left,right,center：左→右→中央の順に３キャラまで
 * left,right,left,right：左→右→左→右の順に
 *  ４キャラまで表示（プッシュインで登場）
 *
 * 【退出されるキャラ】
 * 表示キャラがあぶれたときに退出されるキャラは
 * 発言したのが最も古いキャラとなります。
 * 
 * 
 * 【更新履歴】
 * 1.00 2019/6/15 初版（テスト版）
 *
 * @param showCommand
 * @text 登場コマンド
 * @desc 登場時に使用するコマンド（デフォルトはslideIn）
 * @default slideIn
 *
 * @param hideCommand
 * @text 退出コマンド
 * @desc 退出時に使用するコマンド（デフォルトはslideOut）
 * @default slideOut
 *
 * @param positions
 * @text 表示位置の優先順
 * @desc [left,right]だと左、右の順に２キャラ、[left]だと常に左に１キャラのみ表示。
 * @type string[]
 * @default ["left","right"]
 *
 */
//============================================================================= 



(function(){
var parameters = PluginManager.parameters('TRP_SkitExAutoShow');
parameters = JSON.parse(JSON.stringify(parameters, function(key, value) {
	try {
		return JSON.parse(value);
	} catch (e) {
		try {
			return eval(value);
		} catch (e) {
			return value;
		}
	}
}));




//=============================================================================
// Game_Message
//=============================================================================
var _Game_Message_add = Game_Message.prototype.add;
Game_Message.prototype.add = function(){
	if($gameSkit.isAutoMode()){
		$gameSkit.setTempOn(true);
	}
	_Game_Message_add.apply(this,arguments);

	if($gameSkit.isAutoMode()){
		$gameSkit.setTempOn(false);
	}
};




//=============================================================================
// SkitActor
//=============================================================================
SkitActor.prototype.autoShow = function(position){
	var wait = false;
	var easeType = undefined;
	var command = parameters.showCommand;

	this.slideIn(wait,easeType,position);
};

SkitActor.prototype.autoHide = function(){
	var wait = false;
	this.slideOut(wait);
};






//=============================================================================
// Skit
//=============================================================================
var _Skit_initialize = Skit.prototype.initialize;
Skit.prototype.initialize = function() {
	_Skit_initialize.call(this);
	this._autoModeDisabled = false;
	this._tempOn = false;
};

var _Skit_clearParameters = Skit.prototype.clearParameters;
Skit.prototype.clearParameters = function(){
	_Skit_clearParameters.call(this);
	this._talkActorOrders = [];
}


var _Skit_isSkitOn = Skit.prototype.isSkitOn;
Skit.prototype.isSkitOn = function(){
	return _Skit_isSkitOn.call(this) || this._tempOn;
};

Skit.prototype.isAutoMode = function(){
	return !this._autoModeDisabled;
};

Skit.prototype.setTempOn = function(on){
	this._tempOn = on;
};



/* auto show
===================================*/

var _Skit_onTalk = Skit.prototype.onTalk;
Skit.prototype.onTalk = function(target){
	if(!this._isSkitOn && this.isAutoMode()){
		this.start();
	}

	_Skit_onTalk.call(this,target);

	//auto show
	var actor = this.actor(target);
	if(actor && !actor._showing){
		this.autoShowSkitActor(actor);
	}

	//update talkActors orders
	TRP_CORE.removeArrayObject(this._talkActorOrders,target);
	this._talkActorOrders.push(target);
};



Skit.prototype.autoShowSkitActor = function(targetActor){
	var positions = parameters.positions||['left','right'];

	var actors = this.actors();
	var actorLen = actors.length;
	var showCommand = parameters.showCommand||'slideIn';
	var hideCommand = parameters.hideCommand||'slideOut';

	//no check to show if there is no actor 
	if(actorLen===0 || actorLen===1&&actors[0]===targetActor){
		// targetActor.autoShow(positions[0]);
		// this.pushOutActorsAroundActor(targetActor);

		this.processCommand([showCommand,targetActor._name,false,positions[0]]);
		return;
	}

	//remove not showing actors
	var length = actors.length;
    for(var i=length-1; i>=0; i=(i-1)|0){
        var actor = actors[i];
        if(!actor._showing){
        	actors.splice(i,1);
        }
    }

    //auto hide not latest talked actors
	this._autoHideLastTalkedActors(actors,positions.length-1)

	var position = this._openPositionForAutoShow(actors,positions);
	this.processCommand([showCommand,targetActor._name,false,position]);
	// targetActor.autoShow(position);
	// this.pushOutActorsAroundActor(targetActor);
};

Skit.prototype._autoHideLastTalkedActors = function(actors,maxNum){
	var names = this.names();
	var talkOrders = this._talkActorOrders;
	while(actors.length>maxNum && talkOrders.length>0){
		var lastTalkedActorName = talkOrders.shift();
		if(!names.contains(lastTalkedActorName))continue;
		
		var lastTalkedActor = this.actor(lastTalkedActorName);
		if(!lastTalkedActor)continue;
		TRP_CORE.removeArrayObject(actors,lastTalkedActor);

		//autoHide
		lastTalkedActor.autoHide();
	}
}

Skit.prototype._openPositionForAutoShow = function(actors,positions){
	var candidates = {};
	var actorLen = actors.length;

	var length = positions.length;

	var infoIdxOfActorIdx = 0;
	var infoIdxOfDist = 1;

	//prepare Actor dist info on each position
    for(var i = 0; i<length; i=(i+1)|0){
        var position = positions[i];
        if(candidates[position])continue

        var posValue = TRP_CORE.interpretPositionArg(position);
    	var posInfo = [];
    	candidates[position] = posInfo;
    	for(var j=0; j<actorLen; j=(j+1)|0){
    		var actor = actors[j];
    		var dist = Math.abs(posValue - actor._position);
    		var info = [];
    		info[infoIdxOfActorIdx] = j;
    		info[infoIdxOfDist] = dist;
    		posInfo.push(info);
    	}
    	posInfo.sort(function(a,b){
    		return a[1]-b[1];
    	});
    }

    //check using positions
    positions = positions.concat();
    var uniquePositions = Object.keys(candidates);
    while(positions.length>1 && candidates[positions[0]].length>0){
    	//sort to search most fit position
    	uniquePositions.sort(function(a,b){
    		return candidates[a][0][infoIdxOfDist] - candidates[b][0][infoIdxOfDist];
    	});

    	var mostFitPosition = uniquePositions[0];
    	TRP_CORE.removeArrayObject(positions,mostFitPosition);
    	if(!positions.contains(mostFitPosition)){
    		//no duplicate pos > shift
    		uniquePositions.shift();
    	}

    	var mostFitPosInfo = candidates[mostFitPosition][0];
    	var mostFitActorIdx = mostFitPosInfo[infoIdxOfActorIdx];

    	//remove mostFitActor info from each posInfo
    	var length = uniquePositions.length;
	    for(var i=length-1; i>=0; i=(i-1)|0){
	        var pos = uniquePositions[i];
	        var posInfo = candidates[pos];
	        var infoLen = posInfo.length;
		    for(var j = 0; j<infoLen; j=(j+1)|0){
		        var info = posInfo[j];
		        if(info[infoIdxOfActorIdx] === mostFitActorIdx){
		        	posInfo.splice(j,1);
		        	break;
		        }
		    }
	    }
    }

    return positions[0];
}






/* update > check auto end
===================================*/
var _Skit_update = Skit.prototype.update;
Skit.prototype.update = function(){
	_Skit_update.call(this);

	if(!this.isAutoMode())return;
	if(this.isSkitOn()&&!$gameMap.isEventRunning()&&!this._waitAfterClear){
		this.end();
	}
};

/* plugin command
===================================*/
var _Skit_processCommand = Skit.prototype._processCommand;
Skit.prototype._processCommand = function(args,macroPos){
	var skitCommand = args[0];
	if(skitCommand==='auto'||skitCommand==='オート'){
		this._autoModeDisabled = !TRP_CORE.supplementDefBool(true,args[1]);
	}else{
		_Skit_processCommand.call(this,args,macroPos);
	}
};

})();




