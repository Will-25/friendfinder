var friendsData = require("../data/friends")

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {

    res.json(friendsData)


  });

  app.post("/api/friends", function (req, res) {
    var newFriend = req.body
    var count;
    for (var i = 0; i < friendsData.length; i++) {
      count = 0;
      for (var j = 0; j < friendsData[count].scores.length; j++) {
        var friendScores = friendsData[count].scores[j]
      
        console.log(Math.abs(friendScores - parseInt(newFriend.scores)))
      }
      count++
    }
    friendsData.push(newFriend)



  });

};