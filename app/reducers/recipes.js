import ActionTypes from '../constants/actionTypes';

const initState = {
    showRecipeDetailView: false
};

export function recipesState(state = initState, action) {
    switch (action.type) {
        case ActionTypes.RECIPES_VIEW_ITEM_DETAIL:
            return { ...state, showRecipeDetailView: !state.showRecipeDetailView };
        default:
            return state;
    }
}