import { pizzaSizes } from './index';
import { StoreState, PizzaSize, PizzaToppingField, PizzaTopping } from '../types';
import { requestPizzaSizes, receivePizzaSizes } from '../actions';

describe('Reducer', () => {
    it('Handles request action properly', () => {
        let state: StoreState = {
            pizzaSizes: [],
            loading: false
        };
        state = pizzaSizes(state, requestPizzaSizes());
        expect(state.loading).toBe(true);
        expect(state.pizzaSizes.length).toBe(0);
    });

    it('Handles receive action properly', () => {
        let state: StoreState = {
            pizzaSizes: [],
            loading: false
        };
        state = pizzaSizes(state, receivePizzaSizes({
            pizzaSizes: [<PizzaSize> {
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
            }]
        }));
        expect(state.loading).toBe(false);
        expect(state.pizzaSizes.length).toBe(1);
    });
});
