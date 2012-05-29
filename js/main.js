/* default scene, doodle definition */
(function(doodlePlay, ui){
    
    doodlePlay.Library.setup();
    
    doodlePlay.State.load(function(){
        this.create(ui.Data.getCurrentScene());
        var gui = new ui.Interface($('#doodleSettings'));
    });
    
    doodlePlay.State.ready(function(){
        console.log('ready');
    });

})($.DoodlePlay, $.DoodlePlay.UI)
