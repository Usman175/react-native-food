import ActionTypes from '../constants/actionTypes';

const initState = {
    showRecipeDetailView: false,
    showRecommended: false,
    dateTime: null
};

export function recipesState(state = initState, action) {
    switch (action.type) {
        case ActionTypes.RECIPES_VIEW_ITEM_DETAIL:
            return { ...state, showRecipeDetailView: action.payload.toggleValue, dateTime: action.payload.dateTime };
        case ActionTypes.RECIPES_SHOW_RECOMMENDED:
            return { ...state, showRecommended: true };
        default:
            return state;
    }
}