/*import {ApolloServer, gql} from 'apollo-server';
import {mapKeys} from 'lodash/fp';
import {PersonDataSource} from './datasources/personDataSource';

const typeDefs = gql`
    type Person{
        id: String!
        code: int!
        name: String
        email: String
        country: String
        gender: int
        birtday: Date
    }

    type Query{
        persons: [Person]
    }
`;

const personApi = new PersonDataSource();*/

import { ApolloServer } from 'apollo-server';
import resolvers from './resolvers';
import typeDefs from './type-defs';
import { environment } from './environment';

const server = new ApolloServer({ 
  resolvers, 
  typeDefs,
  introspection: environment.apollo.introspection,
  playground: environment.apollo.playground
 });

server.listen(environment.port)
  .then(({ url }) => console.log(`Server ready at ${url}. `));

//Hot Module Replacement
if (module.hot) {
  module.hot.accept();
  module.hot.dispose(() => console.log('Module disposed.'));
}