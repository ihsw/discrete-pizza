import { apiEndpoint, getPizzas } from './Api';

it('Has an api endpoint', () => {
    expect(apiEndpoint.length).toBeGreaterThan(0);
});

it('Queries the api', async () => {
    const pizzas = await getPizzas();
    expect(pizzas).toBeTruthy();
});
