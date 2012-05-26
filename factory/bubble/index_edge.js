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
            id:'buble',
            type:'rect',
            rect:[212,151,0,0]
         }],
         symbolInstances: [
         {
            id:'buble',
            symbolName:'bubble'
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
"bubble": {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [66,242,600,400],
      id: 'speaking',
      transform: [[-66,-242],[0,0],[0],[1,1]],
      type: 'image',
      fill: ['rgba(0,0,0,0)','images/speaking.svg']
   },
   {
      rect: [166,92,362,186],
      transform: [[-38,0],[0,0],[0],[1,1]],
      font: ['Arial, Helvetica, sans-serif',47,'rgba(0,0,0,1)','normal','none','normal'],
      id: 'text',
      text: 'Doodle forever',
      align: 'center',
      type: 'text'
   }],
   symbolInstances: [
   ]
   },
   states: {
      "Base State": {
         "${_text}": [
            ["style", "font-size", '47px'],
            ["style", "text-align", 'center'],
            ["transform", "translateX", '-38px'],
            ["style", "width", '362px']
         ],
         "${_speaking}": [
            ["transform", "translateX", '-66px'],
            ["transform", "translateY", '-242px']
         ],
         "${symbolSelector}": [
            ["style", "height", '400px'],
            ["style", "width", '600px']
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
