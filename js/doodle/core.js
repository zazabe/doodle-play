/********************** DoodlePlay Core *********************/
(function($, Edge){

var DoodlePlay = $.DoodlePlay = {
		
	scene: null,
	composition: null,
	
	create: function(config){
		if(!this.State.is.load){
			throw new Error('DoodlePlay library is not loaded');
		}
		
		this.scene = this.Library.Scenes.get(config.scene);
		this.scene.forEachDoodles(function(doodleDef, doodleName){
		    console.log(doodleDef, doodleName, config.doodles[doodleName]);
			if(config.doodles[doodleName]){
				this.setDoodleConfig(doodleName, config.doodles[doodleName]);
			}
		});
		
		var symbols = this.scene.getSymbols();
		console.log(symbols);
	    Edge.registerCompositionReadyHandler( 'doodleplay', function(){
            DoodlePlay.edgeReady.apply(DoodlePlay, [Edge]);
	    });
    	Edge.registerCompositionDefn('doodleplay', symbols, [], []);
		Edge.launchComposition('doodleplay');
	},
	
	edgeReady: function(Edge){
	    var composition = this.composition = Edge.getComposition('doodleplay');
	    this.scene.forEachDoodles(function(doodle){
	        var symbols = null;
	        if(symbols = composition.getSymbols(doodle.name)){
                doodle.symbols = symbols[0];
	        }
	        doodle.applyStyles();
	        DoodlePlay.State.changeState('ready');
	    });
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
		setup: function(resources){
			this.path = window.location.href.replace(/([^\/]*)$/, resources.config.url);
			this.setupScenes(resources.scenes);
			this.setupDoodles(resources.doodles);
			
			DoodlePlay.State.changeState('load');
		}
	},
	
	/* Util objects, helpers */
	Util: {}
};
	
})(jQuery, AdobeEdge)
