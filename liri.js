require("dotenv").config();
var axios = require("axios");
var keys = require("./keys.js");
var action = process.argv[2];
var request = process.argv[3];

if (action === "spotify-this-song") {
  spotifyCall();
} if (action === "concert-this") {
  bandsintownCall();
}

function spotifyCall() {
  var Spotify = require('node-spotify-api');
  var spotify = new Spotify(keys.spotify);
  spotify.search({ type: 'track', query: request , limit:1 }, function (err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
    console.log(JSON.stringify(data.tracks.items[0].artists[0].name, null, 2));
  })
}

function bandsintownCall() {
  var bandsintown = require('bandsintown')("codingbootcamp");
  bandsintown.getArtistEventList(process.argv[3]).then(function (events) {
    console.log(events);
  });
}