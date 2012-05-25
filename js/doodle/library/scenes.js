(function($, util, lib){
/********************** Scenes Handler *********************/

var Scenes = function(definition){
	this.scenes = {};

	this.background = definition.background;
	this.createScenes(definition.symbols);
};  

Scenes.prototype = {
	
	createScenes: function(scenes){
		for(var name in scenes){
			this.scenes[name] = new Scene(scenes[name]);
		}
	},	
		
	getScene: function(name){
		return this.scenes[name];
	},
	
	getSceneNames: function(){
		var names = [];
		for(var name in this.scenes){
			names.push(name);
		}
		return names;
	},
	
	getBackgroundList: function(){
		return this.background;
	},	
    getBackgroundSource: function(name){
		return lib.path + 'scenes/background/' + name + '.jpg';
	}
};

var Scene = function(config){
	this.doodles = config.doodles;
};  

Scene.prototype = new util.Symbol();
Scene.prototype.constructor = Scene;


lib.setupScenes = function(definition){
	this.Scenes = new Scenes(definition);
};


})(jQuery, $.DoodlePlay.Util, $.DoodlePlay.Library)