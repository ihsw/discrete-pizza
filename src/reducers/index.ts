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

            const incrementingTopping = state.selectedPizzaToppings[action.index];
            incrementingTopping.quantity += 1;

            const incremented: SelectedPizzaTopping[] = [
                ...state.selectedPizzaToppings.slice(0, action.index),
                incrementingTopping,
                ...state.selectedPizzaToppings.slice(action.index + 1)
            ];

            return { ...state, selectedPizzaToppings: incremented };
        case DECREMENT_TOPPING_QUANTITY:
            if (!state.selectedPizzaToppings) {
                return state;
            }

            const decrementingTopping = state.selectedPizzaToppings[action.index];
            decrementingTopping.quantity += 1;

            const decremented: SelectedPizzaTopping[] = [
                ...state.selectedPizzaToppings.slice(0, action.index),
                decrementingTopping,
                ...state.selectedPizzaToppings.slice(action.index + 1)
            ];

            return { ...state, selectedPizzaToppings: decremented };
        default:
            return state;
    }
};
