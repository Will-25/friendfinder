var friendsData = require("../data/friends")

module.exports = function (app) {

  app.get("/api/friends", function (req, res) {

    res.json(friendsData)


  });
  app.post("/api/friends", function (req, res) {
    var fren = req.body
    var numbers = req.body.scores
    var parse = parseInt(numbers)
    var userScore = []
    friendsData.push(fren)
    console.log(friendsData)
    // for (var i = 0; i < numbers.length; i++) {
    //   var newNum = numbers[i]
    //   userScore.push(parseInt(newNum));

    // }
    // // console.log(userScore);

    // for (var i = 0; i < friendsData.length; i++) {
    //   var friendScore = friendsData[i].scores
     
    //     for (var j = 0; j < friendScore.length; j++){
    //       console.log(friendScore[j])
    //     }
    // }

    
    
  

  });

};