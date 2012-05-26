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
            id:'ddl-human',
            type:'rect',
            rect:[162,43,369,697],
            fill:["rgba(255,255,255,0.00)"],
            stroke:[0,"rgba(0,0,0,1)","none"],
            transform:[[21,0],[0,0],[0],[1,1]],
            c:[
            {
               id:'ddp-body',
               type:'image',
               rect:[65,262,794,1123],
               clip:['rect(74px 594px 298px 400px)'],
               fill:["rgba(0,0,0,0)",im+"girl.svg"],
               transform:[[-374,12]]
            },
            {
               id:'ddp-right-foot',
               type:'image',
               rect:[65,262,794,1123],
               clip:['rect(185px 698px 330px 623px)'],
               fill:["rgba(0,0,0,0)",im+"girl.svg"],
               transform:[[-498,120]]
            },
            {
               id:'ddp-left-foot',
               type:'image',
               rect:[65,262,794,1123],
               clip:['rect(185px 698px 330px 623px)'],
               fill:["rgba(0,0,0,0)",im+"girl.svg"],
               transform:[[-568,121]]
            },
            {
               id:'ddp-left-arm',
               type:'image',
               rect:[65,262,794,1123],
               clip:['rect(30px 691px 179px 618px)'],
               fill:["rgba(0,0,0,0)",im+"girl.svg"],
               transform:[[-576,87]]
            },
            {
               id:'ddp-right-arm',
               type:'image',
               rect:[65,262,794,1123],
               clip:['rect(30px 691px 179px 618px)'],
               fill:["rgba(0,0,0,0)",im+"girl.svg"],
               transform:[[-491,82],[-60]]
            },
            {
               id:'ddp-head',
               type:'image',
               rect:[65,262,794,1123],
               clip:['rect(7px 380px 368px 22px)'],
               fill:["rgba(0,0,0,0)",im+"girl.svg"],
               transform:[[-85,-262]]
            },
            {
               id:'ddp-expression',
               type:'image',
               rect:[48,318,794,1123],
               clip:['rect(0px 225px 201px 0px)'],
               fill:["rgba(0,0,0,0)",im+"expression2.svg"],
               transform:[[23,-158]]
            }]
         }],
         symbolInstances: [

         ]
      },
   states: {
      "Base State": {
         "${_ddl-human}": [
            ["color", "background-color", 'rgba(255,255,255,0.00)'],
            ["transform", "translateX", '21.33px'],
            ["style", "height", '697px'],
            ["transform", "translateY", '0.84px'],
            ["style", "width", '369px']
         ],
         "${_ddp-right-foot}": [
            ["style", "-webkit-transform-origin", [83,16], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [83,16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [83,16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [83,16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [83,16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-498.2px'],
            ["transform", "rotateZ", '-15deg'],
            ["transform", "translateY", '120.33px'],
            ["style", "clip", [185,698,330,623], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_ddp-body}": [
            ["style", "clip", [74,594,298,400], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '12.33px'],
            ["transform", "translateX", '-374.2px']
         ],
         "${_ddp-left-arm}": [
            ["style", "-webkit-transform-origin", [83,3], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [83,3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [83,3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [83,3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [83,3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-576.63px'],
            ["transform", "rotateZ", '60deg'],
            ["transform", "translateY", '87.27px'],
            ["style", "clip", [30,691,179,618], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_ddp-expression}": [
            ["style", "clip", [0,225,201,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '-158.92px'],
            ["transform", "translateX", '23.33px']
         ],
         "${_ddp-right-arm}": [
            ["style", "-webkit-transform-origin", [83,3], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [83,3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [83,3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [83,3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [83,3],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-491.5px'],
            ["transform", "rotateZ", '-60deg'],
            ["style", "-moz-transform-origin", [83,3], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-o-transform-origin", [83,3], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "clip", [28,690,178,616], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["style", "-ms-transform-origin", [83,3], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["transform", "translateY", '82.74px'],
            ["style", "msTransformOrigin", [83,3], {valueTemplate:'@@0@@% @@1@@%'} ]
         ],
         "${_ddp-left-foot}": [
            ["style", "-webkit-transform-origin", [83,16], {valueTemplate:'@@0@@% @@1@@%'} ],
            ["style", "-moz-transform-origin", [83,16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-ms-transform-origin", [83,16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "msTransformOrigin", [83,16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["style", "-o-transform-origin", [83,16],{valueTemplate:'@@0@@% @@1@@%'}],
            ["transform", "translateX", '-568.2px'],
            ["transform", "rotateZ", '15deg'],
            ["style", "clip", [185,698,330,623], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '116.33px']
         ],
         "${_ddp-head}": [
            ["style", "clip", [7,380,368,22], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '-262.66px'],
            ["transform", "translateX", '-85.2px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 500,
         autoPlay: true,
         labels: {
            "end": 500
         },
         timeline: [
            { id: "eid62", tween: [ "transform", "${_ddp-left-arm}", "rotateZ", '90deg', { fromValue: '60deg'}], position: 0, duration: 250 },
            { id: "eid70", tween: [ "transform", "${_ddp-left-arm}", "rotateZ", '60deg', { fromValue: '90deg'}], position: 250, duration: 250 },
            { id: "eid127", tween: [ "style", "${_ddp-left-arm}", "-webkit-transform-origin", [83,3], { valueTemplate: '@@0@@% @@1@@%', fromValue: [83,3]}], position: 0, duration: 0 },
            { id: "eid226", tween: [ "style", "${_ddp-left-arm}", "-moz-transform-origin", [83,3], { valueTemplate: '@@0@@% @@1@@%', fromValue: [83,3]}], position: 0, duration: 0 },
            { id: "eid227", tween: [ "style", "${_ddp-left-arm}", "-ms-transform-origin", [83,3], { valueTemplate: '@@0@@% @@1@@%', fromValue: [83,3]}], position: 0, duration: 0 },
            { id: "eid228", tween: [ "style", "${_ddp-left-arm}", "msTransformOrigin", [83,3], { valueTemplate: '@@0@@% @@1@@%', fromValue: [83,3]}], position: 0, duration: 0 },
            { id: "eid229", tween: [ "style", "${_ddp-left-arm}", "-o-transform-origin", [83,3], { valueTemplate: '@@0@@% @@1@@%', fromValue: [83,3]}], position: 0, duration: 0 },
            { id: "eid137", tween: [ "transform", "${_ddp-right-arm}", "rotateZ", '-90deg', { fromValue: '-60deg'}], position: 0, duration: 250 },
            { id: "eid138", tween: [ "transform", "${_ddp-right-arm}", "rotateZ", '-60deg', { fromValue: '-90deg'}], position: 250, duration: 250 }         ]
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
