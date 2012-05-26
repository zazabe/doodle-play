(function($, util, lib){
/********************** Scenes Handler *********************/

var Scenes = function(definition){
	this.scenes = {};

	this.background = definition.background;
	this.create(definition.symbols);
};  

Scenes.prototype = {
	
	create: function(scenes){
		for(var name in scenes){
			this.scenes[name] = new Scene(name, scenes[name]);
		}
	},	
		
	get: function(name){
		return this.scenes[name];
	},
	
	getNames: function(){
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

var Scene = function(name, config){
    this.parent.apply(this, [name]);
    
    this.objectType = 'scene';
    this.doodles = config.doodles;
};  


Scene.extend(util.Symbol, {
    
    forEachDoodles: function(func){
        for(var name in this.doodles){
            func.apply(this, [this.doodles[name], name, this.doodles[name].type]);
        }
    },
    
    getDoodleDefinitionFor: function(doodleType){
        var doodleName = null;
        this.forEachDoodles(function(doodle, type){
            doodleName = type == doodleType ? doodle.name : doodleName;
        });
        return doodleName;
    },
    
    setDoodleConfig: function(name, config){
        var doodle = lib.Doodles.get(config.type);
        doodle.configure(config);
        this.doodles[name] = doodle;
    },
    
    getSymbols: function(){
        var symbols = {}, instances = null, id = null;
        console.dir(this.parent);
        symbols = this.parent.prototype.getSymbols.call(this);
        for(var name in symbols){
            instances = symbols[name].content.symbolInstances;
            if(instances){
                for(var index in instances){
                    id = instances[index].id;
                    if(symbolName = this.getDoodleDefinitionFor(id)){
                        instances[index].symbolName = symbolName; 
                    }
                }    
            }
        }
        this.forEachDoodles(function(doodle){
            var doodleSymbols = doodle.getSymbols();
            for(var name in doodleSymbols){
                symbols[name] = doodleSymbols[name]; 
            }
        });
        
        return symbols; 
    }
   
});

lib.setupScenes = function(definition){
	this.Scenes = new Scenes(definition);
};


})(jQuery, $.DoodlePlay.Util, $.DoodlePlay.Library)