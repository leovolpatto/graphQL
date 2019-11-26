class friend{
  constructor(public age: Number, public name: String, public gender: string){

  }
}

export default {
    Query: {
      testMessage: (): string => 'This is a Leo\'s emergency broadcast system!',

      friends: (pageSize : Number = 20): any => {
        let friends = [];
        friends.push(new friend(25, 'Ricks\'', 'M'));
        friends.push(new friend(25, 'Marceleza\'', 'M'));
        friends.push(new friend(25, 'Vitin\'', 'M'));        
        friends.push(new friend(25, 'China', 'M'));
        friends.push(new friend(30, 'Diego', 'M'));
        friends.push(new friend(25, 'Willbur', 'M'));
        friends.push(new friend(32, 'Gi', 'F'));
        
        return friends;
      }
    },
  };