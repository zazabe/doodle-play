/* default scene, doodle definition */
var uidebug = null;
(function(doodlePlay, ui){
    
	
	doodlePlay.Library.setup();
	
    doodlePlay.State.load(function(){
		var gui =  uidebug = new ui.Interface();
        
		ui.Data.getCurrentScene(function(config){
		    doodlePlay.create(config);
		});
    });
    
    doodlePlay.State.ready(function(){
        console.log('ready');
    });

})($.DoodlePlay, $.DoodlePlay.UI)
