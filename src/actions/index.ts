import { Dispatch } from 'redux';

import { getPizzaSizes } from '../Api';
import { 
    REQUEST_PIZZA_SIZES,
    RECEIVE_PIZZA_SIZES,
    SELECT_PIZZA_SIZE
} from '../constants';
import { GetPizzaSizesData } from '../types';

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
    index: number;
}

export const selectPizzaSize = (index: number): SelectPizzaSize => {
    return {
        type: SELECT_PIZZA_SIZE,
        index
    };
};

export type PizzaSizeAction = FetchPizzaSize | SelectPizzaSize;
