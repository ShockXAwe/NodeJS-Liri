var omdbCall = function omdbCall(movieName){
    var axios = require("axios");
    var keys = require("./keys.js");
    var omdbKey = (keys.omdb.key);
  
    axios.get("http://www.omdbapi.com/?t=" + movieName + "&apikey=" + omdbKey).then(
      function(response) {
        console.log("Title: " + response.data.Title);
        console.log("Year: " + response.data.Year);
        console.log("IMDB rating: " + response.data.imdbRating);
        console.log("Rotton Tomatoes rating: " + response.data.Ratings[1].Value);
        console.log("Country produced: " + response.data.Country);
        console.log("Language: " + response.data.Language);
        console.log("Plot: " + response.data.Plot);
        console.log("Actors: " + response.data.Actors);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  module.exports.omdbCall = omdbCall;