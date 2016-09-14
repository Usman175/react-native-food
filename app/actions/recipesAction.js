import ActionTypes from '../constants/actionTypes';

export function viewRecipeDetailAction() {
    return {
        type: ActionTypes.RECIPES_VIEW_ITEM_DETAIL
    }
}

export function showRecommended() {
    return {
        type: ActionTypes.RECIPES_SHOW_RECOMMENDED
    }
}
