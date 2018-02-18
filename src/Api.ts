import { GetPizzaSizesData } from './types';

export const apiEndpoint = 'https://core-graphql.dev.waldo.photos/pizza';

export const getPizzaSizes = async (): Promise<GetPizzaSizesData> => {
  const query = `
  {
    pizzaSizes {
      name
      basePrice
      maxToppings
      toppings {
        defaultSelected,
        topping {
          name,
          price
        }
      }
    }
  }
  `;
  const res = await fetch(apiEndpoint, {
    body: JSON.stringify({ query }),
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    }
  });
  return (await res.json()).data;
};
