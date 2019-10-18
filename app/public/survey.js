$(document).ready(function(){

$("#submit").on("click", function() {
var box1 = $(".box1").val();
var box2 = $(".box2").val();
var box3 = $(".box3").val();
var box4 = $(".box4").val();
var box5 = $(".box5").val();
var box6 = $(".box6").val();
var box7 = $(".box7").val();
var box8 = $(".box8").val();
var box9 = $(".box9").val();
var box10 = $(".box10").val();
var inputArr = [box1, box2, box3, box4, box5, box6, box7, box8, box9, box10]
console.log("hey")
console.log(inputArr)

// $.post("/api/friends", inputArr, function(data) {


// })
    

}) 


});