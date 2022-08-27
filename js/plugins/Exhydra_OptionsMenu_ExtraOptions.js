// ╒══════════════════════════════════════════════════════════════════════════════════╕
// █▐▐  Options Menu - Extra Options
// ╞══════════════════════════════════════════════════════════════════════════════════╡
/*:
 *  @plugindesc [1.05] Additional options for the options menu.
 *  @author Exhydra
 *
 *  @param ─ Title Screen
 *  @desc
 *  @default ───────────────
 *
 *  @param Remove from Title Screen
 *  @desc Remove the options menu from the title screen menu.
 *  @default false
 *
 *  @param ─ Game Menu
 *  @desc
 *  @default ───────────────
 *
 *  @param Remove from Game Menu
 *  @desc Remove the options menu from the game menu.
 *  @default false
 *
 *  @param ─ Options Menu
 *  @desc
 *  @default ───────────────
 *
 *  @param Remove Always Dash
 *  @desc Remove the default Always Dash option from the menu.
 *  @default false
 *
 *  @param Remove Command Remember
 *  @desc Remove the default Command Remember option from the menu.
 *  @default false
 *
 *  @param Remove BGM Volume
 *  @desc Remove the default BGM Volume option from the menu.
 *  @default false
 *
 *  @param Remove BGS Volume
 *  @desc Remove the default BGS Volume option from the menu.
 *  @default false
 *
 *  @param Remove ME Volume
 *  @desc Remove the default ME Volume option from the menu.
 *  @default false
 *
 *  @param Remove SE Volume
 *  @desc Remove the default SE Volume option from the menu.
 *  @default false
 *
 *  @param ─ Custom Options
 *  @desc
 *  @default ───────────────
 *
 *  @param Option 1 Label
 *  @desc The name of the option which will appear on the options menu.
 *  @default 
 *
 *  @param Option 1 Type
 *  @desc The type of the option. Valid options are 'variable' or 'switch'.
 *  @default 
 *
 *  @param Option 1 ID
 *  @desc The ID of the variable or switch.
 *  @default 
 *
 *  @param Option 1 Default
 *  @desc The default value of the option.
 *  @default 
 *
 *  @param Option 1 MinMax
 *  @desc Comma separated minimum and maximum value of the option. Option type must be 'variable'.
 *  @default 
 *
 *  @param Option 1 Hide
 *  @desc Comma separated scenes (Scene_Title, Scene_Menu, etc) where the option will be hidden.
 *  @default 
 *
 *  @param Option 2 Label
 *  @desc The name of the option which will appear on the options menu.
 *  @default 
 *
 *  @param Option 2 Type
 *  @desc The type of the option. Valid options are 'variable' or 'switch'.
 *  @default 
 *
 *  @param Option 2 ID
 *  @desc The ID of the variable or switch.
 *  @default 
 *
 *  @param Option 2 Default
 *  @desc The default value of the option.
 *  @default 
 *
 *  @param Option 2 MinMax
 *  @desc Comma separated minimum and maximum value of the option. Option type must be 'variable'.
 *  @default 
 *
 *  @param Option 2 Hide
 *  @desc Comma separated scenes (Scene_Title, Scene_Menu, etc) where the option will be hidden.
 *  @default 
 *
 *  @param Option 3 Label
 *  @desc The name of the option which will appear on the options menu.
 *  @default 
 *
 *  @param Option 3 Type
 *  @desc The type of the option. Valid options are 'variable' or 'switch'.
 *  @default 
 *
 *  @param Option 3 ID
 *  @desc The ID of the variable or switch.
 *  @default 
 *
 *  @param Option 3 Default
 *  @desc The default value of the option.
 *  @default 
 *
 *  @param Option 3 MinMax
 *  @desc Comma separated minimum and maximum value of the option. Option type must be 'variable'.
 *  @default 
 *
 *  @param Option 3 Hide
 *  @desc Comma separated scenes (Scene_Title, Scene_Menu, etc) where the option will be hidden.
 *  @default 
 *
 *  @param Option 4 Label
 *  @desc The name of the option which will appear on the options menu.
 *  @default 
 *
 *  @param Option 4 Type
 *  @desc The type of the option. Valid options are 'variable' or 'switch'.
 *  @default 
 *
 *  @param Option 4 ID
 *  @desc The ID of the variable or switch.
 *  @default 
 *
 *  @param Option 4 Default
 *  @desc The default value of the option.
 *  @default 
 *
 *  @param Option 4 Hide
 *  @desc Comma separated scenes (Scene_Title, Scene_Menu, etc) where the option will be hidden.
 *  @default 
 *
 *  @param Option 4 MinMax
 *  @desc Comma separated minimum and maximum value of the option. Option type must be 'variable'.
 *  @default 
 *
 *  @param Option 5 Label
 *  @desc The name of the option which will appear on the options menu.
 *  @default 
 *
 *  @param Option 5 Type
 *  @desc The type of the option. Valid options are 'variable' or 'switch'.
 *  @default 
 *
 *  @param Option 5 ID
 *  @desc The ID of the variable or switch.
 *  @default 
 *
 *  @param Option 5 Default
 *  @desc The default value of the option.
 *  @default 
 *
 *  @param Option 5 MinMax
 *  @desc Comma separated minimum and maximum value of the option. Option type must be 'variable'.
 *  @default 
 *
 *  @param Option 5 Hide
 *  @desc Comma separated scenes (Scene_Title, Scene_Menu, etc) where the option will be hidden.
 *  @default 
 *
 *  @param ─ Plugin
 *  @desc
 *  @default ───────────────
 *
 *  @param Plugin GID
 *  @desc Global identification tag for internal use only. Do not change.
 *  @default eXa-JEuInwXq4chcgu9
 *
 *  @help
 * ▄ Plugin                  ▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄ ▄ ▄
 *
 *   ┌─ Version : 1.05
 *   ├─ Release : 10th August 2016
 *   ├─ Updated : 10th August 2016
 *   └─ License : Free for Commercial and Non-Commercial Usage
 *
 */
// ╘══════════════════════════════════════════════════════════════════════════════════╛

// ╒══════════════════════════════════════════════════════════════════════════════════╕
// ■ [Object] Plugin
// ╘══════════════════════════════════════════════════════════════════════════════════╛

var Imported = Imported || {};
Imported.exaOptionsMenuExtras = 1.05;

var EXA     = EXA         || {};
EXA.OME     = EXA.OME     || {};
EXA.OME     = EXA.OME     || {};
EXA.OME.CMD = EXA.OME.CMD || {};
EXA.OME.CFG = EXA.OME.CFG || {};

(function() {
	
	'use strict';
  
	var exaParams = $plugins.filter(function(plugin) {
		return plugin.parameters['Plugin GID'] == 'eXa-JEuInwXq4chcgu9';
	})[0].parameters
  
  EXA.OME._titleItem           = (exaParams['Remove from Title Screen'] == 'true') || false;
  EXA.OME._gameItem            = (exaParams['Remove from Game Menu']    == 'true') || false;
  EXA.OME.CMD._alwaysDash      = (exaParams['Remove Always Dash']       == 'true') || false;
  EXA.OME.CMD._commandRemember = (exaParams['Remove Command Remember']  == 'true') || false;
  EXA.OME.CMD._bgmVolume       = (exaParams['Remove BGM Volume']        == 'true') || false;
  EXA.OME.CMD._bgsVolume       = (exaParams['Remove BGS Volume']        == 'true') || false;
  EXA.OME.CMD._meVolume        = (exaParams['Remove ME Volume']         == 'true') || false;
  EXA.OME.CMD._seVolume        = (exaParams['Remove SE Volume']         == 'true') || false;
  
  EXA.OME.CFG = Array.apply(null, Array(5)).map(function () { return new Object(); });
  
  Object.keys(exaParams).forEach(function(key) {
    var tmpMatch = key.match(/Option (\d) (\w*)/i);
    
    if (tmpMatch) {
      var tmpIndex    = Number(tmpMatch[1]) - 1;
      var tmpProperty = tmpMatch[2].toLowerCase();
      var tmpValue    = isNaN(exaParams[key]) ? exaParams[key] : Number(exaParams[key]);

      EXA.OME.CFG[tmpIndex][tmpProperty] = tmpValue || null;
    }
  });
  
  EXA.OME.CFG.forEach(function(prop, index) {
    if (prop.label) {
      if (prop.type == 'switch') {
        prop.default = (prop.default == 'true');
      }
      
      Object.defineProperty(ConfigManager, 'omeOption' + index, {
        configurable: true,
        writable: true,
        value: prop.default
      });
    }
  });

})();

// ╒══════════════════════════════════════════════════════════════════════════════════╕
// ■ [Object] ConfigManager
// ╘══════════════════════════════════════════════════════════════════════════════════╛

// ALIAS ─────────────────────────────────────────────────────────────────────────────┐
// □ [Function] save
// └──────────────────────────────────────────────────────────────────────────────────┘

EXA.OME.ConfigManager_save = ConfigManager.save;

ConfigManager.save = function() {
  
  EXA.OME.CFG.forEach(function(prop, index) {
    if (prop.label) {
      var tmpPropName = 'omeOption' + index;
      
      if (prop.type == 'switch') {
        $gameSwitches.setValue(prop.id, this[tmpPropName]);
      } else if (prop.type == 'variable') {
        $gameVariables.setValue(prop.id, this[tmpPropName]);
      }
      
    }
  }, this);
  
  EXA.OME.ConfigManager_save.call(this);

}; // ConfigManager ‹‹ save

// ALIAS ─────────────────────────────────────────────────────────────────────────────┐
// □ [Function] makeData
// └──────────────────────────────────────────────────────────────────────────────────┘

EXA.OME.ConfigManager_makeData = ConfigManager.makeData;

ConfigManager.makeData = function() {
  
  var config = EXA.OME.ConfigManager_makeData.call(this) || {};

  EXA.OME.CFG.forEach(function(prop, index) {
    if (prop.label) {
      var tmpPropName = 'omeOption' + index;
      
      config[tmpPropName] = this[tmpPropName];
    }
  }, this);

  return config;

}; // ConfigManager ‹‹ makeData

// ALIAS ─────────────────────────────────────────────────────────────────────────────┐
// □ [Function] applyData
// └──────────────────────────────────────────────────────────────────────────────────┘

EXA.OME.ConfigManager_applyData = ConfigManager.applyData;

ConfigManager.applyData = function(config) {
  
  EXA.OME.ConfigManager_applyData.call(this, config);

  EXA.OME.CFG.forEach(function(prop, index) {
    if (prop.label) {
      var tmpPropName = 'omeOption' + index;
      
      if (prop.type == 'switch') {
        this[tmpPropName] = this.readOMEFlag(config, tmpPropName, prop);
      } else if (prop.type == 'variable') {
        this[tmpPropName] = this.readOMEVariable(config, tmpPropName, prop);
      }
      
    }
  }, this);

}; // ConfigManager ‹‹ applyData

// NEW ───────────────────────────────────────────────────────────────────────────────┐
// □ [Function] readOMEVariable
// └──────────────────────────────────────────────────────────────────────────────────┘

ConfigManager.readOMEVariable = function(config, name, prop) {
  
  var value = config[name];

  if (value !== undefined) {
    return value;
  } else {
    return prop.default;
  }
  
}; // ConfigManager ‹‹ readOMEVariable

// NEW ───────────────────────────────────────────────────────────────────────────────┐
// □ [Function] readOMEFlag
// └──────────────────────────────────────────────────────────────────────────────────┘

ConfigManager.readOMEFlag = function(config, name, prop) {
  
  var value = config[name];
  
  if (value !== undefined) {
    return !!value;
  } else {
    return prop.default;
  }
  
}; // ConfigManager ‹‹ readOMEFlag

// ╒══════════════════════════════════════════════════════════════════════════════════╕
// ■ [Object] DataManager
// ╘══════════════════════════════════════════════════════════════════════════════════╛

// ALIAS ─────────────────────────────────────────────────────────────────────────────┐
// □ [Function] setupNewGame
// └──────────────────────────────────────────────────────────────────────────────────┘

EXA.OME.DataManager_setupNewGame = DataManager.setupNewGame;

DataManager.setupNewGame = function() {
  
  EXA.OME.DataManager_setupNewGame.call(this);
  
  ConfigManager.save();
  
}; // DataManager ‹‹ setupNewGame

// ╒══════════════════════════════════════════════════════════════════════════════════╕
// ■ [Object] Window_TitleCommand
// ╘══════════════════════════════════════════════════════════════════════════════════╛

// ALIAS ─────────────────────────────────────────────────────────────────────────────┐
// □ [Function] makeCommandList
// └──────────────────────────────────────────────────────────────────────────────────┘

EXA.OME.Window_TitleCommand_makeCommandList = Window_TitleCommand.prototype.makeCommandList;

Window_TitleCommand.prototype.makeCommandList = function() {
  
  EXA.OME.Window_TitleCommand_makeCommandList.call(this);
  
  if (EXA.OME._titleItem) {
    var omeIndex = this.findSymbol('options');
    
    if (omeIndex > -1) {
      this._list.splice(omeIndex, 1);
    }
  }
  
}; // Window_TitleCommand ‹‹ makeCommandList

// ╒══════════════════════════════════════════════════════════════════════════════════╕
// ■ [Object] Window_Options
// ╘══════════════════════════════════════════════════════════════════════════════════╛

// ALIAS ─────────────────────────────────────────────────────────────────────────────┐
// □ [Function] makeCommandList
// └──────────────────────────────────────────────────────────────────────────────────┘

EXA.OME.Window_Options_makeCommandList = Window_Options.prototype.makeCommandList;

Window_Options.prototype.makeCommandList = function() {
  
  EXA.OME.Window_Options_makeCommandList.call(this);
  
  this.removeCMDOptions();
  this.addOMEOptions();

}; // Window_Options ‹‹ makeCommandList

// NEW ───────────────────────────────────────────────────────────────────────────────┐
// □ [Function] removeCMDOptions
// └──────────────────────────────────────────────────────────────────────────────────┘

Window_Options.prototype.removeCMDOptions = function() {
  
  Object.keys(EXA.OME.CMD).forEach(function(prop, index) {
    if (EXA.OME.CMD[prop]) {
      var cmdIndex = this.findSymbol(prop.slice(1));
      this._list.splice(cmdIndex, 1);
    }
  }, this);
 
}; // Window_Options ‹‹ removeCMDOptions

// NEW ───────────────────────────────────────────────────────────────────────────────┐
// □ [Function] addOMEOptions
// └──────────────────────────────────────────────────────────────────────────────────┘

Window_Options.prototype.addOMEOptions = function() {
  
  EXA.OME.CFG.forEach(function(prop, index) {
    if (prop.label) {
      if (prop.hide) {
        var tmpHideScene = prop.hide.split(',').some(function(scene) {
          return global.window[scene.trim()] == SceneManager._previousClass;
        });
        if (tmpHideScene) return;
      }
      this.addCommand(prop.label, 'omeOption' + index, true, prop);
    }
  }, this);
 
}; // Window_Options ‹‹ addOMEOptions

// NEW ───────────────────────────────────────────────────────────────────────────────┐
// □ [Function] statusText
// └──────────────────────────────────────────────────────────────────────────────────┘

EXA.OME.Window_Options_statusText = Window_Options.prototype.statusText;

Window_Options.prototype.statusText = function(index) {
  
  var symbol = this.commandSymbol(index);
  
  if (this.isOMESymbol(symbol)) {
    if (this.commandOMEExt(index, 'type') == 'variable') {
      var value  = this.getConfigValue(symbol);
      
      return value;
    }
  }
  
  return EXA.OME.Window_Options_statusText.call(this, index);

}; // Window_Options ‹‹ statusText

// NEW ───────────────────────────────────────────────────────────────────────────────┐
// □ [Function] commandOMEExt
// └──────────────────────────────────────────────────────────────────────────────────┘

Window_Options.prototype.commandOMEExt = function(index, prop) {
  
  return this._list[index].ext[prop];
  
}; // Window_Options ‹‹ commandOMEExt

// NEW ───────────────────────────────────────────────────────────────────────────────┐
// □ [Function] isOMESymbol
// └──────────────────────────────────────────────────────────────────────────────────┘

Window_Options.prototype.isOMESymbol = function(symbol) {
  
  return symbol.contains('omeOption');
  
}; // Window_Options ‹‹ isOMESymbol

// ALIAS ─────────────────────────────────────────────────────────────────────────────┐
// □ [Function] cursorRight
// └──────────────────────────────────────────────────────────────────────────────────┘

EXA.OME.Window_Options_cursorRight = Window_Options.prototype.cursorRight;

Window_Options.prototype.cursorRight = function(wrap) {
  
  var index  = this.index();
  var symbol = this.commandSymbol(index);
  
  if (this.isOMESymbol(symbol)) {
    if (this.commandOMEExt(index, 'type') == 'variable') {
      var value = this.getConfigValue(symbol);
      var minmax = this.commandOMEExt(index, 'minmax').split(',').map(Number);

      value++
      
      if (minmax) {
        value = value.clamp(minmax[0], minmax[1]);
      }
      
      this.changeValue(symbol, value);
      return;
    }
  }
  
  EXA.OME.Window_Options_cursorRight.call(this, wrap);

}; // Window_Options ‹‹ cursorRight

// ALIAS ─────────────────────────────────────────────────────────────────────────────┐
// □ [Function] cursorLeft
// └──────────────────────────────────────────────────────────────────────────────────┘

EXA.OME.Window_Options_cursorLeft = Window_Options.prototype.cursorLeft;

Window_Options.prototype.cursorLeft = function(wrap) {
  
  var index  = this.index();
  var symbol = this.commandSymbol(index);
  
  if (this.isOMESymbol(symbol)) {
    if (this.commandOMEExt(index, 'type') == 'variable') {
      var value = this.getConfigValue(symbol);
      var minmax = this.commandOMEExt(index, 'minmax').split(',').map(Number);

      value--

      if (minmax) {
        value = value.clamp(minmax[0], minmax[1]);
      }

      this.changeValue(symbol, value);
      return;
    }
  }
    
    EXA.OME.Window_Options_cursorLeft.call(this, wrap);
    
}; // Window_Options ‹‹ cursorLeft

// ╒══════════════════════════════════════════════════════════════════════════════════╕
// ■ [Object] Window_MenuCommand
// ╘══════════════════════════════════════════════════════════════════════════════════╛

// ALIAS ─────────────────────────────────────────────────────────────────────────────┐
// □ [Function] addOptionsCommand
// └──────────────────────────────────────────────────────────────────────────────────┘

EXA.OME.Window_MenuCommand_addOptionsCommand = Window_MenuCommand.prototype.addOptionsCommand;

Window_MenuCommand.prototype.addOptionsCommand = function() {
  
  EXA.OME.Window_MenuCommand_addOptionsCommand.call(this);

  if (EXA.OME._gameItem) {
    var omeIndex = this.findSymbol('options');
    
    if (omeIndex > -1) {
      this._list.splice(omeIndex, 1);
    }
  }
  
}; // Window_MenuCommand ‹‹ addOptionsCommand

// ▌▌██████████████████████████████████████ EOF █████████████████████████████████████▐▐
