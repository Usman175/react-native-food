const initState = {
    test: 'waht'
};

export function test(state = initState, action) {
    switch (action.type) {
        case 'test':
            return state;
        default:
            return state;
    }
}