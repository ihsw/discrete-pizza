import { apiEndpoint } from './Api';

it('Queries the api', () => {
    expect(apiEndpoint.length).toBeGreaterThan(0);
});
