import { Dispatch } from 'redux';

import { getPizzaSizes } from '../Api';
import { 
    REQUEST_PIZZA_SIZES,
    RECEIVE_PIZZA_SIZES,
    SELECT_PIZZA_SIZE,
    INCREMENT_TOPPING_QUANTITY,
    DECREMENT_TOPPING_QUANTITY
} from '../constants';
import { GetPizzaSizesData, PizzaSize } from '../types';

export interface RequestPizzaSizes {
    type: REQUEST_PIZZA_SIZES;
}

export const requestPizzaSizes = (): RequestPizzaSizes => {
    return {
        type: REQUEST_PIZZA_SIZES
    };
};

export interface ReceivePizzaSizes {
    type: RECEIVE_PIZZA_SIZES;
    data: GetPizzaSizesData;
}

export const receivePizzaSizes = (data: GetPizzaSizesData): ReceivePizzaSizes => {
    return {
        type: RECEIVE_PIZZA_SIZES,
        data
    };
};

export type FetchPizzaSize = RequestPizzaSizes | ReceivePizzaSizes;

export const fetchPizzaSizes = () => {
    return (dispatch: Dispatch<FetchPizzaSize>) => {
        dispatch(requestPizzaSizes());
        return getPizzaSizes()
            .then((res) => dispatch(receivePizzaSizes(res)));
    };
};

export interface SelectPizzaSize {
    type: SELECT_PIZZA_SIZE;
    size: PizzaSize;
}

export const selectPizzaSize = (size: PizzaSize): SelectPizzaSize => {
    return {
        type: SELECT_PIZZA_SIZE,
        size
    };
};

export interface IncrementToppingQuantity {
    type: INCREMENT_TOPPING_QUANTITY;
    index: number;
}

export const incrementToppingQuantity = (index: number): IncrementToppingQuantity => {
    return {
        type: INCREMENT_TOPPING_QUANTITY,
        index
    };
};

export interface DecrementToppingQuantity {
    type: DECREMENT_TOPPING_QUANTITY;
    index: number;
}

export const decrementToppingQuantity = (index: number): DecrementToppingQuantity => {
    return {
        type: DECREMENT_TOPPING_QUANTITY,
        index
    };
};

export type PizzaSizeAction = FetchPizzaSize
    | SelectPizzaSize
    | IncrementToppingQuantity
    | DecrementToppingQuantity;
