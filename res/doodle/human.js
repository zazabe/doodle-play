var data = {
    "human": {
       version: "0.1.6",
       build: "0.10.0.134",
       baseState: "Base State",
       initialState: "Base State",
       gpuAccelerate: true,
       content: {
       dom: [
       {
          rect: [-7,349,400,400],
          transform: [[7,-248]],
          id: 'head',
          type: 'rect'
       },
       {
          rect: [-21,221,400,400],
          transform: [[21,-221]],
          id: 'body',
          type: 'rect'
       },
       {
          rect: [97,157,200,200],
          transform: [[5,-57]],
          id: 'face',
          type: 'rect'
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