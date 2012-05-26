/**
 * Adobe Edge: symbol definitions
 */
(function($, Edge, compId){
//images folder
var im='images/';

var fonts = {};


var resources = [
];
var symbols = {
"stage": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'body',
            type:'image',
            rect:[65,262,794,1123],
            clip:['rect(74px 594px 298px 400px)'],
            fill:["rgba(0,0,0,0)",im+"girl.svg"],
            transform:[[-192,56]]
         },
         {
            id:'right-foot',
            type:'image',
            rect:[65,262,794,1123],
            clip:['rect(185px 698px 330px 623px)'],
            fill:["rgba(0,0,0,0)",im+"girl.svg"],
            transform:[[-312,160]]
         },
         {
            id:'left-foot',
            type:'image',
            rect:[65,262,794,1123],
            clip:['rect(185px 698px 330px 623px)'],
            fill:["rgba(0,0,0,0)",im+"girl.svg"],
            transform:[[-392,160]]
         },
         {
            id:'left-arm',
            type:'image',
            rect:[65,262,794,1123],
            clip:['rect(30px 691px 179px 618px)'],
            fill:["rgba(0,0,0,0)",im+"girl.svg"],
            transform:[[-420,118]]
         },
         {
            id:'right-arm',
            type:'image',
            rect:[65,262,794,1123],
            clip:['rect(30px 691px 179px 618px)'],
            fill:["rgba(0,0,0,0)",im+"girl.svg"],
            transform:[[-280,118]]
         },
         {
            id:'head',
            type:'image',
            rect:[65,262,794,1123],
            clip:['rect(7px 380px 368px 22px)'],
            fill:["rgba(0,0,0,0)",im+"girl.svg"],
            transform:[[97,-219]]
         },
         {
            id:'expression',
            type:'image',
            rect:[48,318,794,1123],
            clip:['rect(0px 225px 201px 0px)'],
            fill:["rgba(0,0,0,0)",im+"expression2.svg"],
            transform:[[206,-123],[0,0],[0],[1,1]]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_head}": [
            ["style", "clip", [7,380,368,22], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '-219px'],
            ["transform", "translateX", '97px']
         ],
         "${_left-foot}": [
            ["transform", "translateX", '-392px'],
            ["transform", "translateY", '160px'],
            ["style", "clip", [185,698,330,623], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_right-foot}": [
            ["style", "clip", [185,698,330,623], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '160px'],
            ["transform", "translateX", '-312px']
         ],
         "${_left-arm}": [
            ["style", "clip", [30,691,179,618], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '118px'],
            ["transform", "translateX", '-420px']
         ],
         "${_right-arm}": [
            ["transform", "translateX", '-280px'],
            ["transform", "translateY", '118px'],
            ["style", "clip", [30,691,179,618], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_expression}": [
            ["style", "clip", [0,225,201,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '-123px'],
            ["transform", "translateX", '206px']
         ],
         "${_body}": [
            ["style", "clip", [74,594,298,400], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '56px'],
            ["transform", "translateX", '-192px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 0,
         autoPlay: true,
         timeline: [
         ]
      }
   }
}
};


Edge.registerCompositionDefn(compId, symbols, fonts, resources);

/**
 * Adobe Edge DOM Ready Event Handler
 */
$(window).ready(function() {
     Edge.launchComposition(compId);
});
})(jQuery, AdobeEdge, "EDGE-5064192");
