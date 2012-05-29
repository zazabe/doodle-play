/* default scene, doodle definition */
(function(doodlePlay, ui){
    
	
	doodlePlay.Library.setup();
	
    doodlePlay.State.load(function(){
		ui.Data.getCurrentScene(function(config){
			doodlePlay.create(config);
		});
		
        var gui = new ui.Interface();
    });
    
    doodlePlay.State.ready(function(){
        console.log('ready');
    });

})($.DoodlePlay, $.DoodlePlay.UI)
