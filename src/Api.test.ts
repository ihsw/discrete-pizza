import { getTestApi, apiEndpoint } from './Api';
import { PizzaSize, PizzaToppingField, PizzaTopping } from './types';

describe('Api', () => {
    it('Has an api endpoint', () => {
        expect(apiEndpoint.length).toBeGreaterThan(0);
    });
    
    it('Queries the api', async () => {
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
        const api = getTestApi(typeDefs, mocks);

        const data = await api.getPizzaSizes();
        expect(data.pizzaSizes).toMatchObject(mockPizzaSizes);
    });
});
