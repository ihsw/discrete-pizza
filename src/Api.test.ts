import { getDefaultApi, apiEndpoint } from './Api';

describe('Api', () => {
    it('Has an api endpoint', () => {
        expect(apiEndpoint.length).toBeGreaterThan(0);
    });
    
    it('Queries the api', async () => {
        const api = getDefaultApi();
        const data = await api.getPizzaSizes();
        expect(data.pizzaSizes.length).toBeGreaterThan(0);
    });
});
