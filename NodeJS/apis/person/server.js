import express from "express";
import bodyParser from "body-parser";
import faker from "faker";
import times from "lodash.times";
import db from "./models";
import apiFriendship from "./app/api/friendship";
import apiPerson from "./app/api/person";

const app = express();
app.use(bodyParser.json());
app.use(express.static("app/public"));

apiFriendship(app, db);
apiPerson(app, db);
app.get("/", (req, res) => {
  res.json("What are you looking for? Did you know that curiosity killed the cat? Anyway, this is the Person/Friendships API :)");
});

var personPicker = function(id, peopleIds){
  var friendId = id;
  while(friendId === id){
    friendId = peopleIds[Math.floor(Math.random()*peopleIds.length)];
  }      
  return friendId;
}

db.sequelize.sync().then(() => {
  db.persons.bulkCreate(
    times(500, () => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      country: faker.address.country(),
      gender: 'm',
      birthday: faker.date.past(60)
    })), {returning: true}
  ).then(all => {
    console.warn("&&&&&&&&&&");
    const peopleIds = all.map((p) => p.id);
    //for each person creates up to 5 friends
    console.warn(peopleIds);
    peopleIds.forEach(id => {
      db.friendships.bulkCreate(
        times(5, () => ({
          idPerson: id,
          idFriendPerson: personPicker(id, peopleIds),
          since: faker.date.past(2)
        })), {returning: true}
      ).catch((e) => {
        console.warn("Pau violento");
        console.warn(e);
      });
    });
  });

  app.listen(5011, () => console.log("Person API is running on port 5011"));
}).catch(e => {
  console.warn("Pau violento");
  console.error(e);
});