import ActionTypes from '../constants/actionTypes';

export function toggleIngredientAction(index) {
    return {
        type: ActionTypes.TOGGLE_INGREDIENT,
        payload: {
            index
        }
    }
}

export function addIngredientAction(ingredients) {
    return {
        type: ActionTypes.ADD_INGREDIENTS_TO_CHECKLIST,
        payload: {
            ingredients
        }
    }
}
