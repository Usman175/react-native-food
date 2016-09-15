import ActionTypes from '../constants/actionTypes';

export function viewRecipeDetailAction(toggleValue) {
    return {
        type: ActionTypes.RECIPES_VIEW_ITEM_DETAIL,
        payload: {
            toggleValue,
            dateTime: new Date()
        }
    }
}

export function showRecommended() {
    return {
        type: ActionTypes.RECIPES_SHOW_RECOMMENDED
    }
}
