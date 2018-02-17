import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { SchemaLink } from 'apollo-link-schema';
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';

import { GetPizzaSizesData } from './types';

export const apiEndpoint = 'https://core-graphql.dev.waldo.photos/pizza';

type LinkType = HttpLink | SchemaLink;

export class Api {
  client: ApolloClient<NormalizedCacheObject>;

  constructor(link: LinkType) {
    this.client = new ApolloClient({
      link,
      cache: new InMemoryCache()
    });
  }

  async getPizzaSizes(): Promise<GetPizzaSizesData> {
    const result = await this.client.query({
      query: gql`
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
        `
    });

    return <GetPizzaSizesData> result.data;
  }
}

export const getDefaultApi = (): Api => new Api(new HttpLink({uri: apiEndpoint}));
export const getTestApi = (typeDefs: string, mocks: any): Api => {
  const schema = makeExecutableSchema({ typeDefs });
  addMockFunctionsToSchema({ schema, mocks });
  return new Api(new SchemaLink({ schema }));
};
