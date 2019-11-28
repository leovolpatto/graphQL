import { gql } from 'apollo-server';

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
`;