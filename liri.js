require("dotenv").config();
var keys = require("./keys.js");
var action = process.argv[2];
var request = process.argv[3];

if (action == "spotify-this-song" && request == ""){
  spotifyCall("The Sign")
} else if (action === "spotify-this-song"){
  spotifyCall(request);
}

if (action == "concert-this") {
  bandsintownCall(request);
} if (action == "movie-this"){
  omdbCall(request);
}

function spotifyCall(trackName) {
  var Spotify = require('node-spotify-api');
  var spotify = new Spotify(keys.spotify);
  spotify.search({ type: 'track', query: trackName, limit: 1 }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    } 
    console.log(JSON.stringify(data.tracks.items[0].artists[0].name, null, 2));
    console.log(JSON.stringify(data.tracks.items[0].name, null, 2))
    console.log(JSON.stringify(data.tracks.items[0].external_urls.spotify, null, 2))
    console.log(JSON.stringify(data.tracks.items[0].album.name, null, 2))
  })
}

function bandsintownCall(bandsName) {
  var axios = require("axios");

  axios.get("https://rest.bandsintown.com/artists/" + bandsName + "/events?app_id=codingbootcamp").then(
    function(response) {
      console.log(response.data[0].venue);
      // for(var i = 0; i < response.data.length; i++){
      //   console.log(response.data[i]);
      // }
    })
    .catch(function (error) {
      console.log(error);
    });
}

function omdbCall(movieName){
  var axios = require("axios");
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