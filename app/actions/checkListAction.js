import ActionTypes from '../constants/actionTypes';

export function toggleIngredientAction(index) {
    return {
        type: ActionTypes.TOGGLE_INGREDIENT,
        payload: {
            index
        }
    }
}
