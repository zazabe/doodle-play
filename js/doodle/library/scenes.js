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
    
    //TODO: refactoring: create a SceneInstance object to customize the scene, parameters below are not set in Scene object normally 
    this.config = {
        background: null
    };
};  


Scene.extend(util.Symbol, {
    
    forEachDoodles: function(func){
        for(var name in this.doodles){
            func.apply(this, [this.doodles[name], name, this.doodles[name].type || null]);
        }
    },
    
    
    getDoodleDefinitionFor: function(doodleType){
        var doodleName = null;
        this.forEachDoodles(function(doodle, type){
            doodleName = type == doodleType ? doodle.name : doodleName;
        });
        return doodleName;
    },
    
    setDoodles: function(name, config){
        var doodle = lib.Doodles.get(config.type);
        this.doodles[name] = doodle.getInstance(config);
    },
    
    getSymbols: function(){
        var symbols = {}, instances = null, id = null;
        
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
    },
    
    //TODO: refactoring: create a SceneInstance object to customize the scene, methods below are not set in Scene object normally 
    define: function(config){
        this.config = {
            background: config.background
        };
    },
    
    setBackground: function(){
        $('#Stage').css({
            backgroundImage: 'url(' + lib.path + 'scene/background/' + this.config.background + '.svg)',
            backgroundPositionX: '0px',
            backgroundPositionY: '0px',
            backgroundRepeat:    'no-repeat'
        });
    }
   
});

lib.setupScenes = function(definition){
	this.Scenes = new Scenes(definition);
};


})(jQuery, $.DoodlePlay.Util, $.DoodlePlay.Library)