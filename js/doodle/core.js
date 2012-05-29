/********************** DoodlePlay Core *********************/
(function($, Edge){

var DoodlePlay = $.DoodlePlay = {
	
	dev: false,	
		
	scene: null,
	composition: null,
	
	create: function(config){
		if(!this.State.is.load){
			throw new Error('DoodlePlay library is not loaded');
		}
		
		this.scene = this.Library.Scenes.get(config.scene);
		this.scene.define(config);
		
		this.scene.forEachDoodles(function(doodleDef, doodleName){
			if(config.doodles[doodleName]){
				this.setDoodles(doodleName, config.doodles[doodleName]);
			}
		});
		
		var symbols = this.scene.getSymbols();
		
		Edge.registerCompositionDefn('doodleplay', symbols, [], []);
		
		Edge.registerCompositionReadyHandler('doodleplay', function(){
			DoodlePlay.composition = Edge.getComposition('doodleplay');
			DoodlePlay.edgeReady.apply(DoodlePlay, [Edge]);
		});
		
		Edge.okToLaunchComposition('doodleplay');
		
	},
	
	edgeReady: function(Edge){
	    this.composition.getSymbolForDoodle = function(doodle){
            var symbol = null, symbols = this.getSymbols(doodle.name), regexp = null;
            
            for(var index in symbols){
                regexp = new RegExp(doodle.id);
                if(regexp.test(symbols[index].element.selector)){
                    symbol = symbols[index];
                }    
            }
            
            return symbol;
        };
        
	    this.scene.forEachDoodles(function(doodle){
		    var symbol = DoodlePlay.composition.getSymbolForDoodle(doodle);
	        if(symbol){
	            doodle.setSymbols(symbol);
	        }
	        else {
	            throw new Error('no symbol found for doodle ' + doodle.name);
	        }
	        
	        this.setBackground();
            doodle.applyStyles();
	    });
	    
        DoodlePlay.State.changeState('ready');
	},

		
	/* DoodlePlay State controllers */
	State: {
		is: {
		  ready: false,  
		  load: false
		},
		callbacks: {
            load:  function(){},
            ready: function(){}
		},
		
		load: function(callback){
            this.applyCallback('load', callback);    
        },
        
        ready: function(callback){
            this.applyCallback('ready', callback);    
        },
        
        changeState: function(type){
            this.is[type] = true;
            this[type].apply(this);
        },
        
        applyCallback: function(type, callback){
            this.callbacks[type] = callback || this.callbacks[type];
            if(this.is[type]){
                this.callbacks[type].apply(DoodlePlay);
            }
        }
    },
	
	/* scenes/doodles definition */
	Library: {
		path: window.location.href,
		setup: function(){
		    this.path = window.location.href.replace(/([^\/]*)$/, 'res/');
            
            var url = this.path + 'definition.json', lib = this; 
            
            $.ajax({
                url: url,
				async: false,
                dataType: 'json',
                success: function(result, status, request){
                    lib.setupScenes(result.scenes);
                    lib.setupDoodles(result.doodles);
                    DoodlePlay.State.changeState('load');
                },
                error: function(result, status, request){
                    throw new Error('can\'t not load doodle play resources ' + url);
                }
            });
			
			
		}
	},
	
	/* Util objects, helpers */
	Util: {}
};

})(jQuery, AdobeEdge)
