import configureStore, { MockStore } from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as fetchMock from 'fetch-mock';

import { RequestPizzaSizes, ReceivePizzaSizes, fetchPizzaSizes } from './index';
import * as constants from '../constants';
import { StoreState, PizzaSize, PizzaToppingField, PizzaTopping } from '../types';

const mockStoreCreator = configureStore<StoreState>([thunk]);

describe('Actions', () => {
    it('Creates request/receive actions when fetching pizza sizes', () => {
        const mockPizzaSizes = [<PizzaSize> {
            name: 'ayy',
            basePrice: 99,
            maxToppings: 5,
            toppings: [
                <PizzaToppingField> {
                    defaultSelected: false,
                    topping: <PizzaTopping> {
                        name: 'lmao',
                        price: 99
                    }
                }
            ]
        }];

        const expectedActions = [
            <RequestPizzaSizes> { type: constants.REQUEST_PIZZA_SIZES },
            <ReceivePizzaSizes> { type: constants.RECEIVE_PIZZA_SIZES, data: {
                pizzaSizes: mockPizzaSizes
            }}
        ];
        const store: MockStore<StoreState> = mockStoreCreator(<StoreState> { pizzaSizes: [], loading: false });

        fetchMock.post('*', {
            headers: { 'content-type': 'application/json' },
            body: { data: { pizzaSizes: mockPizzaSizes } }
        });

        return store.dispatch(fetchPizzaSizes()).then(() => {
            expect(store.getActions()).toMatchObject(expectedActions);
        });
    });
});
