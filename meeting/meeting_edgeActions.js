/***********************
* Adobe Edge Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

//Edge symbol: 'stage'
(function(symbolName) {





Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2463, function(sym, e) {

});
//Edge binding end








})("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'doodle-animal'
(function(symbolName) {
Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
// insert code here
// play the timeline from the given position (ms or label)
sym.play(1);
});
//Edge binding end

Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
sym.stop();

var timeout = Math.floor(Math.random()*1000);

setTimeout(function(sym){
  sym.play(1);
}, timeout, sym);
});
//Edge binding end









})("doodle-animal");
//Edge symbol end:'doodle-animal'

//=========================================================

//Edge symbol: 'animalLeft'
(function(symbolName) {







})("animalLeft");
//Edge symbol end:'animalLeft'

//=========================================================

//Edge symbol: 'scene'
(function(symbolName) {







})("scene");
//Edge symbol end:'scene'

})(jQuery, AdobeEdge, "meeting-2");