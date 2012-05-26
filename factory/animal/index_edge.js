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
            id:'animal',
            type:'rect',
            rect:[186,132,0,0]
         }],
         symbolInstances: [
         {
            id:'animal',
            symbolName:'animal'
         }
         ]
      },
   states: {
      "Base State": {
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '768px'],
            ["style", "width", '1024px']
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
},
"animal": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [134,212,1800,300],
      transform: [[-134,-110]],
      id: 'body',
      type: 'image',
      clip: ['rect(0px 600px 300px 0px)'],
      fill: ['rgba(0,0,0,0)','images/cow-dev2.svg']
   },
   {
      rect: [-48,247,400,400],
      id: 'head',
      transform: [[148,-247]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/cow-dev3.svg']
   },
   {
      rect: [288,260,1800,200],
      transform: [[-86,-159]],
      id: 'face',
      type: 'image',
      clip: ['rect(0px 200px 200px 0px)'],
      fill: ['rgba(0,0,0,0)','images/default-dev.svg']
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${symbolSelector}": [
            ["style", "height", '402px'],
            ["style", "width", '1800px']
         ],
         "${_head}": [
            ["transform", "translateX", '148px'],
            ["transform", "translateY", '-247px']
         ],
         "${_body}": [
            ["style", "background-position", [0,0], {valueTemplate:'@@0@@px @@1@@px'} ],
            ["style", "clip", [0,600,300,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateX", '-134px'],
            ["transform", "translateY", '-110px']
         ],
         "${_face}": [
            ["style", "clip", [0,200,200,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ],
            ["transform", "translateY", '-159px'],
            ["transform", "translateX", '-86px']
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
})(jQuery, AdobeEdge, "EDGE-1616025");
