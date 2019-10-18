var friendsData = require("../data/friends")

module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        console.log(friendsData)
       res.json(friendsData)

        
    });
    app.post("/api/friends", function (req, res) {
      var x = req.body.name 
      req.body.scores
    });

};