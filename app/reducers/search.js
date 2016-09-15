import ActionTypes from '../constants/actionTypes';

const initState = {
    showRecipeDetailView: false,
    dateTime: null
};

export function searchRecipesState(state = initState, action) {
    switch (action.type) {
        case ActionTypes.SEARCH_RECIPES_VIEW_ITEM_DETAIL:
            return { ...state, showRecipeDetailView: action.payload.toggleValue, dateTime: action.payload.dateTime };
        default:
            return state;
    }
}