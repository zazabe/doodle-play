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
            id:'human',
            type:'rect',
            rect:[308,142,0,0]
         }],
         symbolInstances: [
         {
            id:'human',
            symbolName:'human'
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
"human": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [-7,349,4400,400],
      transform: [[7,-248]],
      id: 'head',
      type: 'image',
      clip: ['rect(0px 400px 400px 0px)'],
      fill: ['rgba(0,0,0,0)','images/girl-dev2.svg']
   },
   {
      rect: [-21,221,400,400],
      id: 'body',
      transform: [[21,-221]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/girl-dev.svg']
   },
   {
      rect: [97,157,1800,200],
      transform: [[5,-57]],
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
            ["style", "height", '501px'],
            ["style", "width", '4400px']
         ],
         "${_head}": [
            ["transform", "translateY", '-248px'],
            ["transform", "translateX", '7px'],
            ["style", "clip", [0,400,400,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
         ],
         "${_body}": [
            ["transform", "translateX", '21px'],
            ["transform", "translateY", '-221px']
         ],
         "${_face}": [
            ["transform", "translateY", '-57px'],
            ["transform", "translateX", '5px'],
            ["style", "clip", [0,200,200,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
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
})(jQuery, AdobeEdge, "EDGE-9457562");
