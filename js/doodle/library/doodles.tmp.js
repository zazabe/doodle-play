/**
 * Doodle instance
 *
var DoodleInstance = function(doodle){
    console.log('DoodleInstance', this.parent);
    
    //this.parent.apply(this, [doodle.name, doodle.config, doodle.doodles]);
    this.doodle = doodle;
    //this.state = DoodleInstance.UNSET;
    this.type = null;
};

DoodleInstance.UNSET   = 0;
DoodleInstance.SYMBOL  = 1;
DoodleInstance.DEFINED = 2;

DoodleInstance.extend(Doodle, {
    
    define: function(config){
        this.type = config.type;
    },
    
    setSymbols: function(symbols){
        if(!symbols instanceof a.Symbol){
            throw new Error('symbols need to be a Symbol object');
        }
        this.symbols = symbols;
        this.state = DoodleInstance.SYMBOL;
    },
    
    
    applyStyles: function(){
        if(this.state < DoodleInstance.SYMBOL){
            throw new Error('doodle instance is not ready yet');
        }    
        for(var name in this.parts){
            console.log(name, this.parts, this.symbols);
        }
    }    
});
*/
