//=============================================================================
// Vitsuno_CommonSave.js
//-----------------------------------------------------------------------------
// Copyright (c) 2016 Tsuno Ozumi
// Released under the MIT license
// http://opensource.org/licenses/mit-license.php
//=============================================================================

var Vitsuno = Vitsuno || {};
Vitsuno.CommonSave = {};
Vitsuno.CommonSave.version = 1.00;

/*:
 * @plugindesc ファイル共有のセーブデータシステムを構築します。
 * @author 尾角 つの (Tsuno Ozumi)
 *
 * @param Savefile ID
 * @desc コモンセーブ用のセーブファイルIDです。(-2以下の数字にする。)
 * @default -2
 *
 * @help
 *
 * コモンデータの読み込み(スクリプト):
 *   var data = CommonDataManager.load('プロパティ名') || default;
 * 
 * コモンデータの保存(スクリプト):
 *   CommonDataManager.save('プロパティ名', data);
 *
 * セーブファイルIDについて:
 *   ツクールMVはセーブファイルIDでゲームデータを保存しています。
 *     -1 : オプション設定、0 : ファイル情報、1以上 : ファイルデータ
 *   上記の通りセーブファイルIDが使用されているため、それ以外の数字を使用して下さい。
 *   他のプラグインでも使用している場合がありますので、競合しないように注意して下さい。
 *
 * このプラグインには、プラグインコマンドはありません。
 */

// ● プラグインの設定値を取得
Vitsuno.CommonSave.parameters = PluginManager.parameters('Vitsuno_CommonSave');
Vitsuno.CommonSave.savefileId = Number(Vitsuno.CommonSave.parameters['Savefile ID']);

//-----------------------------------------------------------------------------
// CommonDataManager
//-----------------------------------------------------------------------------

// ● モジュールの作成
function CommonDataManager() {
    throw new Error('This is a static class');
}

// ● コモンデータのロード
CommonDataManager.loadContents = function() {
    var json;
    var contents = {};
    try {
        json = StorageManager.load(StorageManager.CommonSavefileId());
    } catch (e) {
        console.error(e);
    }
    if (json) {
        contents = JSON.parse(json);
    }
    return contents;
};

// ● コモンデータの個別ロード
CommonDataManager.load = function(prop) {
    return this.loadContents()[prop];
};

// ● コモンデータのセーブ
//     saveContents : セーブするデータを含んだオブジェクト
CommonDataManager.saveContents = function(contents) {
    var dataContents = this.loadContents();
    for (var prop in contents) {
        dataContents[prop] = contents[prop];
    }
    var savefileId = StorageManager.CommonSavefileId();
    StorageManager.save(savefileId, JSON.stringify(dataContents));
};

// ● コモンデータの個別セーブ
CommonDataManager.save = function(prop, data) {
    var contents = {};
    contents[prop] = data;
    this.saveContents(contents);
};

// ● ゲーム開始時の処理
CommonDataManager.startGame = function() {
    // ゲーム開始時に読み込みたい内容をここで拡張する。
};

// ● ゲームセーブ時の処理
CommonDataManager.saveGame = function() {
    // ゲームセーブ時に保存したい内容をここで拡張する。
};

//-----------------------------------------------------------------------------
// DataManager
//-----------------------------------------------------------------------------

// ● ニューゲームのセットアップ
Vitsuno.CommonSave.DataMgr_setupNewGame = DataManager.setupNewGame;
DataManager.setupNewGame = function() {
    Vitsuno.CommonSave.DataMgr_setupNewGame.call(this);
    CommonDataManager.startGame();
};

// ● バトルテストのセットアップ
Vitsuno.CommonSave.DataMgr_setupBattleTest = DataManager.setupBattleTest;
DataManager.setupBattleTest = function() {
    Vitsuno.CommonSave.DataMgr_setupBattleTest.call(this);
    CommonDataManager.startGame();
};

// ● イベントテストのセットアップ
Vitsuno.CommonSave.DataMgr_setupEventTest = DataManager.setupEventTest;
DataManager.setupEventTest = function() {
    Vitsuno.CommonSave.DataMgr_setupEventTest.call(this);
    CommonDataManager.startGame();
};

// ● ゲームデータのセーブ
Vitsuno.CommonSave.DataMgr_saveGame = DataManager.saveGame;
DataManager.saveGame = function(savefileId) {
    var result = Vitsuno.CommonSave.DataMgr_saveGame.call(this, savefileId);
    if (result) {
        CommonDataManager.saveGame();
    }
    return result;
};

// ● ゲームデータのロード
Vitsuno.CommonSave.DataMgr_loadGame = DataManager.loadGame;
DataManager.loadGame = function(savefileId) {
    var result = Vitsuno.CommonSave.DataMgr_loadGame.call(this, savefileId);
    if (result) {
        CommonDataManager.startGame();
    }
    return result;
};

//-----------------------------------------------------------------------------
// StorageManager
//-----------------------------------------------------------------------------

// ● コモンセーブIDの取得
StorageManager.CommonSavefileId = function() {
    return Math.min(Vitsuno.CommonSave.savefileId, -2);
};

// ● ローカルファイルパスの取得
Vitsuno.CommonSave.StorageMgr_localFilePath = StorageManager.localFilePath;
StorageManager.localFilePath = function(savefileId) {
    if (savefileId === this.CommonSavefileId()) {
        return this.localFileDirectoryPath() + 'common.rpgsave';
    }
    return Vitsuno.CommonSave.StorageMgr_localFilePath.call(this, savefileId);
};

// ● Webストレージキーの取得
Vitsuno.CommonSave.StorageMgr_webStorageKey = StorageManager.webStorageKey;
StorageManager.webStorageKey = function(savefileId) {
    if (savefileId === this.CommonSavefileId()) {
        return 'RPG Common';
    }
    return Vitsuno.CommonSave.StorageMgr_webStorageKey.call(this, savefileId);
};
