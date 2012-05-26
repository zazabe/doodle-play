(function(lib){

lib.setup({
	config: {
		url:   'res/'
	},
	scenes: {
		background: ['blank', 'landscape'],
		symbols: {
			basic: {
				doodles: {
					speaker: {
						type: 'human'
					}
				},
                message: {
                   type: 'bubble'
                },
				symbol: null
			},
			meeting: {
				doodles: {
					speaker: {
						type:  'animal'
					},
					watcher: {
						type: 'animal'
					},
					message: {
					   type: 'bubble'
                    }
				},
				symbol: null
			}
		}
	},
	doodles: {
		parts: {
			head: {
				type: ['pig', 'cow', 'sheep', 'girl'],
				size: { width: 200, height: 200}
			},
			face: {
				type: ['happy', 'sad'],
				size: { width: 100, height: 100}
			}
		},
		symbols: {
			animal: {
				type: ['pig', 'sheep', 'cow'],
				part: ['head', 'face'],
				size: { width: 150, height: 100}
			},
			human: {
				type: ['girl'],
				part: ['head', 'face'],
                size: { width: 200, height: 100}
			},
			text: {
                type: ['bubble'],
                size: { width: 200, height: 100}
            }
		}
	}

});
	
})($.DoodlePlay.Library)
