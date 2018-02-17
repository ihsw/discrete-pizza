import { Dispatch } from 'redux';

import { Api } from '../Api';
import { 
    REQUEST_PIZZA_SIZES,
    RECEIVE_PIZZA_SIZES
} from '../constants';
import { GetPizzaSizesData } from '../types';

export interface RequestPizzaSizes {
    type: REQUEST_PIZZA_SIZES;
}

export interface ReceivePizzaSizes {
    type: RECEIVE_PIZZA_SIZES;
    data: GetPizzaSizesData;
}

export type FetchPizzaSizes = RequestPizzaSizes | ReceivePizzaSizes;

export const requestPizzaSizes = (): RequestPizzaSizes => {
    return {
        type: REQUEST_PIZZA_SIZES
    };
};

export const receivePizzaSizes = (data: GetPizzaSizesData): ReceivePizzaSizes => {
    return {
        type: RECEIVE_PIZZA_SIZES,
        data
    };
};

export const fetchPizzaSizes = (api: Api) => {
    return (dispatch: Dispatch<FetchPizzaSizes>) => {
        dispatch(requestPizzaSizes());
        return api.getPizzaSizes()
            .then((res) => dispatch(receivePizzaSizes(res)));
    };
};
