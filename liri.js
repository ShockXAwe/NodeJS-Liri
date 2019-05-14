require("dotenv").config();
var Spotify = require('node-spotify-api');
var axios = require("axios");
var keys = require("./keys.js");
var spotify = new Spotify(keys.spotify);
var action = process.argv[2];
var request = process.argv[3];

if (action === "spotify-this-song"){
    spotify.search({ type: 'track', query: request }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
      
      console.log(data); 
      });
} if (action === "concert-this"{
    
})