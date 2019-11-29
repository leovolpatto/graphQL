import { gql } from 'apollo-server';
import { GraphQLScalarType, parseValue } from 'graphql';

export default gql`
  type Query {
    testMessage: String!
    friends(
      pageSize: Int
    ): [Friend]!

    personWithFriends(
      name: String
      id: Int
    ) : Person!
  }

  type Friend {
    name: String
    age: Int
  }

  type Person{
    name: String
    age: Int
    Friends: [Friend]
  }

  type Mutation{
    createPerson(name: String) : Person!
  }

`;