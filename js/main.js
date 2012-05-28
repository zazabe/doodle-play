/* default scene, doodle definition */
(function(doodlePlay, ui){
    
    doodlePlay.Library.setup();
    
    doodlePlay.State.load(function(){
        var gui = new ui.Interface($('#doodleSettings'));
        //this.create(ui.Data.getCurrentScene());
    });
    
    doodlePlay.State.ready(function(){
        console.log('ready');
    });

})($.DoodlePlay, $.DoodlePlay.UI)
