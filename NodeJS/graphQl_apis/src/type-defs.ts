import { gql } from 'apollo-server';

export default gql`
  type Query {
    testMessage: String!
    friends(
      pageSize: Int
    ): [Friend]!
  }

  type Friend {
    name: String
    age: Int
  }
`;