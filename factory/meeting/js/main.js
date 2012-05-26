var config = {
    scene: 'meeting',
    doodles: {
        land: '',
        main: {
            type: 'human',
            head: 'girl',
            body: 'girl',
            face: 'happy'
        },
        other: {
            type: 'animal',
            head: 'girl',
            body: 'cow',
            face: 'lazy'
        },
        message: {
            type: 'bubble',
            text: 'Hello !'
        }
    }
};

Doodle.apply(config);
