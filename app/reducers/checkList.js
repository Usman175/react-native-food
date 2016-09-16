import ActionTypes from '../constants/actionTypes';

const initState = {
    list: [
        { checked: false, ingredient: 'Ingredient 1' },
        { checked: false, ingredient: 'Ingredient 2' },
        { checked: true, ingredient: 'Ingredient 3' },
        { checked: true, ingredient: 'Ingredient 4' },
        { checked: false, ingredient: 'Ingredient 5' },
        { checked: false, ingredient: 'Ingredient 6' }
    ]
};

export function checkListState(state = initState, action) {
    switch (action.type) {
        case ActionTypes.TOGGLE_INGREDIENT:
            const list = [...state.list];
            const ingredient = list[action.payload.index];
            ingredient.checked = !ingredient.checked;
            return { ...state, list };
        default:
            return state;
    }
}