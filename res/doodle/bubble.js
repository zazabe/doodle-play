var data = {
    "bubble": {
       version: "0.1.6",
       build: "0.10.0.134",
       baseState: "Base State",
       initialState: "Base State",
       gpuAccelerate: true,
       content: {
       dom: [
       {
          rect: [135,145,1000,300],
          transform: [[-135,-145]],
          id: 'body',
          type: 'rect'
       },
       {
          rect: [90,79,241,132],
          font: ['Arial, Helvetica, sans-serif',47,'rgba(0,0,0,1)','normal','none','normal'],
          id: 'text',
          text: 'Hello world',
          align: 'center',
          type: 'text'
       }],
       symbolInstances: [
       ]
       },
       states: {
          "Base State": {
             "${_text}": [
                ["style", "line-height", '1.2em' ]
             ],
             "${_body}": [
                ["transform", "translateX", '-135px'],
                ["transform", "translateY", '-145px'],
                ["style", "clip", [0,500,300,0], {valueTemplate:'rect(@@0@@px @@1@@px @@2@@px @@3@@px)'} ]
             ],
             "${symbolSelector}": [
                ["style", "height", '300px'],
                ["style", "width", '1000px']
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