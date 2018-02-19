import { PizzaSizeAction } from '../actions';
import { 
    REQUEST_PIZZA_SIZES,
    RECEIVE_PIZZA_SIZES,
    SELECT_PIZZA_SIZE,
    INCREMENT_TOPPING_QUANTITY,
    DECREMENT_TOPPING_QUANTITY
} from '../constants';
import { StoreState, SelectedPizzaTopping } from '../types';

export const pizzaSizes = (state: StoreState, action: PizzaSizeAction): StoreState => {
    switch (action.type) {
        case REQUEST_PIZZA_SIZES:
            return { ...state, loading: true };
        case RECEIVE_PIZZA_SIZES:
            return { ...state, loading: false, pizzaSizes: action.data.pizzaSizes };
        case SELECT_PIZZA_SIZE:
            const predefinedSelectedPizzaToppings = action.size.toppings
                .map((toppingField) => {
                    return <SelectedPizzaTopping> {
                        quantity: toppingField.defaultSelected ? 1 : 0,
                        topping: toppingField.topping
                    };
                });
            return {
                ...state,
                currentPizzaSize: action.size,
                selectedPizzaToppings: predefinedSelectedPizzaToppings
            };
        case INCREMENT_TOPPING_QUANTITY:
            if (!state.selectedPizzaToppings) {
                return state;
            }

            state.selectedPizzaToppings[action.index].quantity++;

            return { ...state };
        case DECREMENT_TOPPING_QUANTITY:
            if (!state.selectedPizzaToppings) {
                return state;
            }

            state.selectedPizzaToppings[action.index].quantity--;

            return { ...state };
        default:
            return state;
    }
};
