import { PizzaSizeAction } from '../actions';
import { 
    REQUEST_PIZZA_SIZES,
    RECEIVE_PIZZA_SIZES,
    SELECT_PIZZA_SIZE
} from '../constants';
import { StoreState } from '../types';

export const pizzaSizes = (state: StoreState, action: PizzaSizeAction): StoreState => {
    switch (action.type) {
        case REQUEST_PIZZA_SIZES:
            return { ...state, loading: true };
        case RECEIVE_PIZZA_SIZES:
            return { ...state, loading: false, pizzaSizes: action.data.pizzaSizes };
        case SELECT_PIZZA_SIZE:
            return { ...state, currentPizzaSize: action.size };
        default:
            return state;
    }
};
