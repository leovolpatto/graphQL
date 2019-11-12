module.exports = (app, db) => {
    app.get("/authors", (req, res) => {
      db.author.findAll().then((all) => {
        res.json(all);
      });
    });

    app.get( "/authors/:id", (req, res) =>
      db.author.findByPk(req.params.id).then( (result) => res.json(result))
    );
  }