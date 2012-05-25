/********************** DoodlePlay Core *********************/
(function($){

var DoodlePlay = $.DoodlePlay = {
		
	scene: null,
	
	create: function(config){
		if(!this.State.isReady){
			throw new Error('DoodlePlay library is not ready');
		}
		
		this.scene = this.Library.Scenes.get(config.scene);
		this.scene.forEachDoodles(function(doodleName){
			if(config.doodles[doodleName]){
				this.configDoodle(doodleName, config.doodles[doodleName]);
			}
		});
		
		Edge.registerCompositionDefn('doodleplay', this.scene.getSymbols(), [], []);
		Edge.launchComposition('doodleplay');
	},

		
	/* DoodlePlay State controllers */
	State: {
		isReady: false,
		callback: function(){},
		ready: function(callback){
			this.callback = callback || this.callback;
			if(this.isReady){
				this.callback.apply(this);
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
		}
	},
	
	/* Util objects, helpers */
	Util: {}
};
	
})(jQuery)
