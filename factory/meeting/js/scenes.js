var Doodle.stages = Doodle.stages || {};
(function(Doodle){


var scenes = {};

/* meeting scene */

scenes.meetingleft = {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
   dom: [
   {
      rect: [131,25,87,87],
      transform: [[-96,95]],
      id: 'ddl-item1',
   },
   {
      rect: [131,25,87,87],
      transform: [[-96,-25]],
      id: 'ddl-item2',
   },
   {
      rect: [131,25,87,87],
      transform: [[-131,32]],
      id: 'ddl-item3',
   }],
   symbolInstances: [
         {
            id: 'ddl-item1',
            symbolName: Doodle.symbolFor('ddl-item1')
         },
         {
            id: 'ddl-item1',
            symbolName: Doodle.symbolFor('ddl-item2')
         },
         {
            id: 'ddl-item1',
            symbolName: Doodle.symbolFor('ddl-item3')
         }
   ]
   },
   states: {
      "Base State": {
         "${_ddl-item3}": [
            ["color", "background-color", 'rgba(138,121,121,1.00)'],
            ["transform", "translateY", '95px'],
            ["transform", "translateX", '-96px']
         ],
         "${symbolSelector}": [
            ["style", "height", '207px'],
            ["style", "width", '122px']
         ],
         "${_ddl-item2}": [
            ["color", "background-color", 'rgba(138,121,121,1.00)'],
            ["transform", "translateY", '-25px'],
            ["transform", "translateX", '-96px']
         ],
         "${_ddl-item1}": [
            ["color", "background-color", 'rgba(138,121,121,1.00)'],
            ["transform", "translateY", '32px'],
            ["transform", "translateX", '-131px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4000,
         autoPlay: true,
         timeline: [
            { id: "eid19", tween: [ "transform", "${_ddl-item3}", "translateX", '137px', { fromValue: '-96px'}], position: 2000, duration: 2000 },
            { id: "eid24", tween: [ "transform", "${_ddl-item2}", "translateY", '-19px', { fromValue: '-25px'}], position: 2000, duration: 2000 },
            { id: "eid23", tween: [ "transform", "${_ddl-item2}", "translateX", '168px', { fromValue: '-96px'}], position: 2000, duration: 2000 },
            { id: "eid21", tween: [ "transform", "${_ddl-item1}", "translateX", '94px', { fromValue: '-131px'}], position: 2000, duration: 2000 },
            { id: "eid20", tween: [ "transform", "${_ddl-item3}", "translateY", '94px', { fromValue: '95px'}], position: 2000, duration: 2000 },
            { id: "eid22", tween: [ "transform", "${_ddl-item1}", "translateY", '25px', { fromValue: '32px'}], position: 2000, duration: 2000 }         ]
      }
   }
};

    
scenes.meeting = {
   version: "0.1.6",
   build: "0.10.0.134",
   baseState: "Base State",
   initialState: "Base State",
   gpuAccelerate: true,
   content: {
         dom: [
         {
            id:'ddland',
            type:'rect',
            rect:[-24,190,550,400]
         },
         {
            id:'left',
            type:'rect',
            rect:[-155,165,0,0]
         },
         {
            id:'right',
            type:'rect',
            rect:[-155,165,0,0]
         },
         {
            id:'ddl-main',
            type:'rect',
            rect:[-24,190,87,87]
         },
         {
            id:'bulle',
            type:'rect',
            rect:[282,43,129,66],
            overflow:'visible',
            opacity:0,
            c:[
            {
               id:'message',
               type:'text',
               rect:[305,86,65,13],
               text:"Hello World",
               font:['Arial, Helvetica, sans-serif',12,"rgba(0,0,0,1)","normal","none",""],
               transform:[[-273,-60],[0,0],[0],[1,1]]
            }]
         }],
         symbolInstances: [
         {
            id:'ddland',
            symbolName: Doodle.symbolFor('ddland')
         },
         {
            id:'ddl-main',
            symbolName: Doodle.symbolFor('ddl-main')
         },
         {
            id:'left',
            symbolName: scene.meetingLeft
         },
         {
            id:'right',
            symbolName: scene.meetingLeft
         }
         ]
      },
   states: {
      "Base State": {
         "${_ddl-main}": [
            ["color", "background-color", 'rgba(212,125,125,1.00)'],
            ["transform", "translateX", '-243px'],
            ["transform", "translateY", '-34px'],
            ["transform", "rotateZ", '0deg']
         ],
         "${_left}": [
            ["transform", "translateX", '2px']
         ],
         "${_right}": [
            ["transform", "scaleX", '-1'],
            ["transform", "translateY", '-9px'],
            ["transform", "translateX", '737px']
         ],
         "${_Stage}": [
            ["color", "background-color", 'rgba(255,255,255,1)'],
            ["style", "height", '400px'],
            ["style", "width", '550px']
         ],
         "${_ddland}": [
            ["style", "height", '400px'],
            ["transform", "translateX", '24px'],
            ["transform", "translateY", '-190px'],
            ["style", "width", '550px']
         ],
         "${_message}": [
            ["transform", "translateX", '-273px'],
            ["style", "height", '13px'],
            ["style", "width", '65px'],
            ["transform", "translateY", '-60px'],
            ["style", "font-size", '12px']
         ],
         "${_bulle}": [
            ["color", "background-color", 'rgba(137,125,212,1.00)'],
            ["transform", "translateX", '9px'],
            ["style", "overflow", 'visible'],
            ["style", "height", '66px'],
            ["style", "opacity", '0'],
            ["transform", "translateY", '21px']
         ]
      }
   },
   timelines: {
      "Default Timeline": {
         fromState: "Base State",
         toState: "",
         duration: 4500,
         autoPlay: true,
         timeline: [
            { id: "eid61", tween: [ "style", "${_bulle}", "opacity", '1', { fromValue: '0'}], position: 4135, duration: 365 },
            { id: "eid44", tween: [ "transform", "${_ddl-main}", "translateY", '-49px', { fromValue: '-34px'}], position: 0, duration: 1000 },
            { id: "eid47", tween: [ "transform", "${_ddl-main}", "translateY", '-53px', { fromValue: '-49px'}], position: 1000, duration: 250 },
            { id: "eid50", tween: [ "transform", "${_ddl-main}", "translateY", '-77.31px', { fromValue: '-53px'}], position: 1250, duration: 500 },
            { id: "eid55", tween: [ "transform", "${_ddl-main}", "translateY", '-82.3px', { fromValue: '-77.31px'}], position: 1750, duration: 2250 },
            { id: "eid45", tween: [ "transform", "${_ddl-main}", "rotateZ", '-8deg', { fromValue: '0deg'}], position: 0, duration: 1250 },
            { id: "eid48", tween: [ "transform", "${_ddl-main}", "rotateZ", '-39deg', { fromValue: '-8deg'}], position: 1250, duration: 500 },
            { id: "eid51", tween: [ "transform", "${_ddl-main}", "rotateZ", '-7deg', { fromValue: '-39deg'}], position: 1750, duration: 500 },
            { id: "eid52", tween: [ "transform", "${_ddl-main}", "rotateZ", '0deg', { fromValue: '-7deg'}], position: 2250, duration: 750 },
            { id: "eid43", tween: [ "transform", "${_ddl-main}", "translateX", '73px', { fromValue: '-243px'}], position: 0, duration: 1000 },
            { id: "eid46", tween: [ "transform", "${_ddl-main}", "translateX", '88px', { fromValue: '73px'}], position: 1000, duration: 250 },
            { id: "eid49", tween: [ "transform", "${_ddl-main}", "translateX", '120px', { fromValue: '88px'}], position: 1250, duration: 500 },
            { id: "eid53", tween: [ "transform", "${_ddl-main}", "translateX", '160px', { fromValue: '120px'}], position: 1750, duration: 1250 },
            { id: "eid54", tween: [ "transform", "${_ddl-main}", "translateX", '255px', { fromValue: '160px'}], position: 3000, duration: 1000 }         ]
      }
   }
};


})(Doodle)
