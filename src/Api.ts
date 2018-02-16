import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';

export const apiEndpoint = 'https://core-graphql.dev.waldo.photos/pizza';
export const client = new ApolloClient({
    link: new HttpLink({ uri: apiEndpoint }),
    cache: new InMemoryCache()
});

export const getPizzas = () => {
    return client.query({
        query: gql`
        {
            pizzaSizes {
              name,
              basePrice
              maxToppings,
              toppings {
                topping {
                  name,
                  price
                }
              }
            }
          }
        `
    });
};
