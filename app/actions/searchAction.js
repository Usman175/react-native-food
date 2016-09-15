import ActionTypes from '../constants/actionTypes';

export function viewRecipeDetailAction(toggleValue) {
    return {
        type: ActionTypes.SEARCH_RECIPES_VIEW_ITEM_DETAIL,
        payload: {
            toggleValue,
            dateTime: new Date()
        }
    }
}
