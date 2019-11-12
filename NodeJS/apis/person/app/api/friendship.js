module.exports = async (app, db) => {
    app.get( "/friendships", (req, res) =>
      db.friendships.findAll().then( (result) => res.json(result) )
    );
  }