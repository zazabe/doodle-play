/*
Function.prototype.extend = function (parent, methods) {
    var current = this;
    this.prototype = (function(){
        var anonymous = function(){ this.constructor = current; };
        anonymous.prototype = parent.prototype;
        
        anonymous.prototype.parent = parent;
        
        anonymous.prototype.superConstructor = function (caller) {
        if(typeof anonymous.prototype.parent == 'function'){
                console.log('superConstructor', typeof parent == 'function', arguments.callee.caller, anonymous.prototype.parent, Array.prototype.slice.call(arguments, 1));
                anonymous.prototype.parent.apply(caller, Array.prototype.slice.call(arguments, 1));
            }   
        };
        return new anonymous();
    })();
    
    
    
    for(var name in methods){
        this.prototype[name] = methods[name];
    }
};
