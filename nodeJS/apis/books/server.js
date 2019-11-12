import express from "express";
import bodyParser from "body-parser";
import faker from "faker";
import times from "lodash.times";
import random from "lodash.random";
import db from "./models";
import apiBook from "./app/api/book";
import apiAuthor from "./app/api/author";

const app = express();
app.use(bodyParser.json());
app.use(express.static("app/public"));

apiBook(app, db);
apiAuthor(app, db);
app.get("/", (req, res) => {
  res.json("What are you looking for? Did you know that curiosity killed the cat?");
});

db.sequelize.sync().then(() => {
  
  db.author.bulkCreate(
    times(10, () => ({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    }))
  );
  
  db.book.bulkCreate(
    times(10, () => ({
      title: faker.lorem.sentence(),
      content: faker.lorem.paragraph(),
      authorId: random(1, 10)
    }))
  );
  
  app.listen(5010, () => console.log("Books API is running on port 5010"));
});