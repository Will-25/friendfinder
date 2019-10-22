$(document).ready(function () {

    $("#submit").on("click", function (event) {
        event.preventDefault();
        var name = $(".nameInput").val();
        var picture = $(".pictureInput").val();
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
        var input = {
            name: name,
            picture: picture,
            scores: inputArr

        }

        if (   name === "" ||
            picture === "" ||
            box1 === "1 - 5" ||
            box2 === "1 - 5" ||
            box3 === "1 - 5" ||
            box4 === "1 - 5" ||
            box5 === "1 - 5" ||
            box6 === "1 - 5" ||
            box7 === "1 - 5" ||
            box8 === "1 - 5" ||
            box9 === "1 - 5" ||
            box10 === "1 - 5") {
            alert("Please fill out all forms!!")

        } else {
            
            $("#submit").attr("data-toggle", "modal")
            $("#submit").attr("data-target", "#modal")

            $.post("/api/friends", input).then(function(data) {
                $("#friendMatch").text("You matched with " + data.name)
                $(".modal-body").html("<img id='friendImage' alt='no working picture uploaded!' src='" + data.photo + "'>")
               
            });

            
           
        }

      



    });



});
