module.exports = (app, db) => {
    app.get("/persons", (req, res) => {
      db.persons.findAll().then((all) => {
        res.json(all);
      });
    });

    app.get( "/persons/:id", (req, res) =>
      db.persons.findByPk(req.params.id).then( (result) => res.json(result))
    );

    app.get( "/persons/:id/friends", (req, res) =>
      db.friendships.findAll({
        where: {
          idPerson: req.params.id
        }
      }).then((frds) => {
        res.json(frds);
      })
    );
  }