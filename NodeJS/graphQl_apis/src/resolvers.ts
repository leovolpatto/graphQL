import { GraphQLExtensionStack } from "graphql-extensions";

class friend{
  constructor(public age: Number, public name: String, public gender: string){

  }
}

export default {
    Query: {
      testMessage: (): string => 'This is a Leo\'s emergency broadcast system!',

      friends: (root : any, args: { pageSize: Number }, ctx : GraphQLExtensionStack) => {
        let friends = [];
        friends.push(new friend(args.pageSize, args.pageSize.toString(), 'M'));
        friends.push(new friend(25, 'Ricks\'', 'M'));
        friends.push(new friend(25, 'Marceleza\'', 'M'));
        friends.push(new friend(25, 'Vitin\'', 'M'));        
        friends.push(new friend(25, 'China', 'M'));
        friends.push(new friend(30, 'Diego', 'M'));
        friends.push(new friend(25, 'Willbur', 'M'));
        
        return friends;
      }
    },
  };