$(document).ready(function () {

    var videoGames = ["Metal Gear Solid", "Death Stranding", "Dark Souls", "Bloodborne", "Sekiro", "Monster Hunter World", "Resident Evil 4", "Bioshock", "Skyrim"];
    
    function displayGameInfo() {

        var game = $(this).attr("data-game");

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
            game + "&api_key=pdIuumcS6QJWAEKQnx05suMByK2uCWNw&limit=10";

        $.ajax({
                url: queryURL,
                method: "GET"
            }).then(function (response) {
                console.log(response);

                var results = response.data;

                for (var i = 0; i < results.length; i++) {

                    if (results[i].rating !== "r") {
                        var gifDiv = $("<div>")
                        var rating = results[i].rating;
                        var p = $("<p>").text("Rating: " + rating);
                        var gameImage = $("<img>");
                        gameImage.attr("src", results[i].images.fixed_height.url);
                        //gameImage.attr("data-state", "still");
                        //gameImage.attr("data-animate", results[i].images.fixed_height.url);
                        //gameImage.attr("data-still", results[i].images.fixed_height_still.url);
                        //gameImage.addClass("gifs");
                        gifDiv.append(p);
                        gifDiv.append(gameImage);
                        $(".gifs").prepend(gifDiv);
                    }

                }
            });

            
        }

    function renderButtons() {

        $("#buttons").empty();

        for (i = 0; i < videoGames.length; i++) {
            var a = $("<button>");
            a.addClass("game-btn");
            a.attr("data-game", videoGames[i]);
            a.text(videoGames[i]);
            $("#buttons").prepend(a);
            
        }

    };

    $(".btn").on("click", function (event) {
        event.preventDefault();

        var newBtn = $("#userGifSearch").val().trim();

        videoGames.push(newBtn);

        renderButtons();
    });

$(document).on("click", ".game-btn", displayGameInfo); 

renderButtons();

//$(".gifs").on("click", function() {
    //The attr jQuery method allows us to get or set the value of any attribute on our HTML element
   //var state = $(this).attr("data-state");
    // If the clicked image's state is still, update its src attribute to what its data-animate value is.
    // Then, set the image's data-state to animate
    // Else set src to the data-still value
   //if (state === "still") {
    // $(this).attr("src", $(this).attr("data-animate"));
    // $(this).attr("data-state", "animate");
    //} else {
    // $(this).attr("src", $(this).attr("data-still"));
    // $(this).attr("data-state", "still");
  // }
//});

});