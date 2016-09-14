import ActionTypes from '../constants/actionTypes';

const initState = {
    showRecipeDetailView: false
};

export function searchRecipesState(state = initState, action) {
    switch (action.type) {
        case ActionTypes.SEARCH_RECIPES_VIEW_ITEM_DETAIL:
            return { ...state, showRecipeDetailView: !state.showRecipeDetailView };
        default:
            return state;
    }
}