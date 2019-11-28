import { GraphQLExtensionStack } from "graphql-extensions";

class Person{
  constructor(public age: Number, public name: String, public gender: string){
    this.Friends = [];
  }

  public Friends: Array<Friend>;
}

class Friend extends Person{

}

export default {
    Query: {
      testMessage: (): string => 'This is a Leo\'s emergency broadcast system!',

      friends: function(root : any, args: { pageSize: Number }, ctx : GraphQLExtensionStack){
        let friends = [];
        friends.push(new Friend(args.pageSize, args.pageSize.toString(), 'M'));
        friends.push(new Friend(25, 'Ricks\'', 'M'));
        friends.push(new Friend(25, 'Marceleza\'', 'M'));
        friends.push(new Friend(25, 'Vitin\'', 'M'));        
        friends.push(new Friend(25, 'China', 'M'));
        friends.push(new Friend(30, 'Diego', 'M'));
        friends.push(new Friend(25, 'Willbur', 'M'));
        
        return friends;
      },

      personWithFriends: function(root : any, args: { name: String, id: Number }, ctx : GraphQLExtensionStack) : Person {
        let p = new Person(41, "Jose", "m");
        p.Friends.push(new Friend(41, "Antonio", 'm'));
        p.Friends.push(new Friend(34, "Jacqueline Brazil", 'f'));
        p.Friends.push(new Friend(101, "Rosinha", 'f'));

        console.debug(p);
        return p;
      }
    },
  };