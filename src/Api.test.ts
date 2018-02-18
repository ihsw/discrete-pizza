import * as fetchMock from 'fetch-mock';

import { getPizzaSizes, apiEndpoint } from './Api';
import { PizzaSize, PizzaToppingField, PizzaTopping } from './types';

describe('Api', () => {
    it('Has an api endpoint', () => {
        expect(apiEndpoint.length).toBeGreaterThan(0);
    });
    
    it('Queries the api', async () => {
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
        fetchMock.post('*', {
            headers: { 'content-type': 'application/json' },
            body: { data: { pizzaSizes: mockPizzaSizes } }
        });

        const data = await getPizzaSizes();
        expect(data.pizzaSizes).toMatchObject(mockPizzaSizes);
    });
});
