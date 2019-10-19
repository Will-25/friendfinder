$(document).ready(function () {

    $("#submit").on("click", function (event) {
        event.preventDefault();
        var name = $(".nameInput").val();
        var picture = $(".pictureInput").val();
        var box1 = $(".box1").val();
        var newBox1 = parseInt(box1);
        var box2 = $(".box2").val();
        var newBox2 = parseInt(box2);
        var box3 = $(".box3").val();
        var newBox3 = parseInt(box3);
        var box4 = $(".box4").val();
        var newBox4 = parseInt(box4);
        var box5 = $(".box5").val();
        var newBox5 = parseInt(box5);
        var box6 = $(".box6").val();
        var newBox6 = parseInt(box6);
        var box7 = $(".box7").val();
        var newBox7 = parseInt(box7);
        var box8 = $(".box8").val();
        var newBox8 = parseInt(box8);
        var box9 = $(".box9").val();
        var newBox9 = parseInt(box9);
        var box10 = $(".box10").val();
        var newBox10 = parseInt(box10);
        var inputArr = [newBox1, newBox2, newBox3, newBox4, newBox5, newBox6, newBox7, newBox8, newBox9, newBox10]
        var input = {
            name: name,
            picture: picture,
            scores: inputArr

        }

        // if (   name === "" ||
        //     picture === "" ||
        //     box1 === "1 - 5" ||
        //     box2 === "1 - 5" ||
        //     box3 === "1 - 5" ||
        //     box4 === "1 - 5" ||
        //     box5 === "1 - 5" ||
        //     box6 === "1 - 5" ||
        //     box7 === "1 - 5" ||
        //     box8 === "1 - 5" ||
        //     box9 === "1 - 5" ||
        //     box10 === "1 - 5") {
        //     alert("Please fill out all forms!!")

        // } else {
            $.post("/api/friends", input).then(function(data) {
               
            });
            
        // }

      



    });



});
