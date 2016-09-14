import ActionTypes from '../constants/actionTypes';

const initState = {
    showRecipeDetailView: false,
    showRecommended: false
};

export function recipesState(state = initState, action) {
    switch (action.type) {
        case ActionTypes.RECIPES_VIEW_ITEM_DETAIL:
            return { ...state, showRecipeDetailView: !state.showRecipeDetailView };
        case ActionTypes.RECIPES_SHOW_RECOMMENDED:
            return { ...state, showRecommended: true };
        default:
            return state;
    }
}