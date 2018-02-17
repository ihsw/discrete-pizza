import * as configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { SchemaLink } from 'apollo-link-schema';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import { RequestPizzaSizes, ReceivePizzaSizes, fetchPizzaSizes } from './index';
import * as constants from '../constants';
import { StoreState, PizzaSize, PizzaToppingField, PizzaTopping } from '../types';
import { Api } from '../Api';

const mockStoreCreator = configureStore([thunk]);

describe('Actions', () => {
    it('Creates request/receive actions when fetching pizza sizes', () => {
        const typeDefs = `
        type Topping {
            name: String
            price: Float
        }
        type ToppingField {
            defaultSelected: Boolean
            topping: Topping
        }
        type PizzaSize {
            name: String
            basePrice: Float
            maxToppings: Int
            toppings: [ToppingField]
        }
        type Query {
            pizzaSizes: [PizzaSize]
        }
        schema {
            query: Query
        }
        `;
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
        const mocks = {
            Query: () => ({
                pizzaSizes: () => mockPizzaSizes
            })
        };
        const schema = makeExecutableSchema({ typeDefs });
        addMockFunctionsToSchema({
            schema,
            mocks,
            preserveResolvers: true
        });
        const api = new Api(new SchemaLink({ schema }));

        const expectedActions = [
            <RequestPizzaSizes> { type: constants.REQUEST_PIZZA_SIZES },
            <ReceivePizzaSizes> { type: constants.RECEIVE_PIZZA_SIZES, data: {
                pizzaSizes: mockPizzaSizes
            }}
        ];
        const store = mockStoreCreator(<StoreState> { pizzaSizes: [] });

        return store.dispatch(fetchPizzaSizes(api)).then(() => {
            expect(store.getActions()).toMatchObject(expectedActions);
        });
    });
});
