var spotifyCall = function spotifyCall(trackName) {
    var Spotify = require('node-spotify-api');
    var keys = require("./keys.js");
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

  module.exports.spotifyCall = spotifyCall;