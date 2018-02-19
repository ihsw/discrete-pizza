import { PizzaSizeAction } from '../actions';
import { 
    REQUEST_PIZZA_SIZES,
    RECEIVE_PIZZA_SIZES,
    SELECT_PIZZA_SIZE,
    INCREMENT_TOPPING_QUANTITY,
    DECREMENT_TOPPING_QUANTITY,
    ADD_PIZZA,
    REMOVE_PIZZA
} from '../constants';
import { StoreState, SelectedPizzaTopping, SelectedPizza } from '../types';

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
            incrementingTopping.quantity++;

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
            decrementingTopping.quantity--;

            const decremented: SelectedPizzaTopping[] = [
                ...state.selectedPizzaToppings.slice(0, action.index),
                decrementingTopping,
                ...state.selectedPizzaToppings.slice(action.index + 1)
            ];

            return { ...state, selectedPizzaToppings: decremented };
        case ADD_PIZZA:
            const addingPizzas = state.pizzas ? state.pizzas : [];

            const addedPizzas: SelectedPizza[] = [
                ...addingPizzas,
                action.pizza
            ];

            return { ...state, pizzas: addedPizzas, currentPizzaSize: null, selectedPizzaToppings: [] };
        case REMOVE_PIZZA:
            const removingPizzas: SelectedPizza[] = state.pizzas
                ? [
                    ...state.pizzas.slice(0, action.index),
                    ...state.pizzas.slice(action.index + 1)
                ]
                : [];

            return { ...state, pizzas: removingPizzas };
        default:
            return state;
    }
};
