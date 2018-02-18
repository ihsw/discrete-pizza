import { FetchPizzaSizesAction } from '../actions';
import { 
    REQUEST_PIZZA_SIZES,
    RECEIVE_PIZZA_SIZES
} from '../constants';
import { StoreState } from '../types';

export const pizzaSizes = (state: StoreState, action: FetchPizzaSizesAction): StoreState => {
    switch (action.type) {
        case REQUEST_PIZZA_SIZES:
            return { ...state, loading: true };
        case RECEIVE_PIZZA_SIZES:
            return { ...state, loading: false, pizzaSizes: action.data.pizzaSizes };
        default:
            return state;
    }
};
