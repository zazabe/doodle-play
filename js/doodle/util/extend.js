/********************** Doodle Play: Core Inherence extension *********************/
Function.prototype.extend = function(parent, methods){
    this.prototype = new parent;
    this.prototype.constructor = this;
    this.prototype.parent = parent;
    
    for(var name in methods){
        this.prototype[name] = methods[name];
    }
};
