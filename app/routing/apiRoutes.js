var friendsData = require("../data/friends")

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {

    res.json(friendsData)


  });

  app.post("/api/friends", function (req, res) {
    var newFriend = req.body
    for (var i = 0; i < friendsData.length; i++) {
      var currentFriend = friendsData[i] 
      var totalDifference = 0
      for (var j = 0; j < currentFriend.scores.length; j++) {
        
        var friendScores = currentFriend.scores[j]
      
        var difference = Math.abs(friendScores - parseInt(newFriend.scores[j]))
        totalDifference = totalDifference + difference 
        console.log(totalDifference)
      }
      
    }
    friendsData.push(newFriend)



  });

};