var data = {
    "animal": {
       version: "0.1.6",
       build: "0.10.0.134",
       baseState: "Base State",
       initialState: "Base State",
       gpuAccelerate: true,
       content: {
       dom: [
       {
          rect: [134,212,600,300],
          transform: [[-134,-110]],
          id: 'body',
          type:'rect'
       },
       {
          rect: [-48,247,400,400],
          transform: [[148,-247]],
          id: 'head',
          type:'rect'
       },
       {
          rect: [288,260,200,200],
          transform: [[-86,-159]],
          id: 'face',
          type:'rect'
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