import ActionTypes from '../constants/actionTypes';

const initState = {
    list: []
};

export function checkListState(state = initState, action) {
    switch (action.type) {
        case ActionTypes.TOGGLE_INGREDIENT:
            const list = [...state.list];
            const ingredient = list[action.payload.index];
            ingredient.checked = !ingredient.checked;
            return { ...state, list };
        case ActionTypes.ADD_INGREDIENTS_TO_CHECKLIST:
            console.log(action.payload, action.payload.ingredients);
            return { ...state, list: [...state.list, ...action.payload.ingredients] };
        default:
            return state;
    }
}