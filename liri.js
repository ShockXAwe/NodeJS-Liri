require("dotenv").config();
var spotify = require("./spotify.js");
var omdb = require("./omdb.js");
var bandsintown = require("./bandsintown.js");
var action = process.argv[2];
var request = process.argv.slice(3).join(" ");


if (action == "spotify-this-song" && request == ""){
  console.log("fireeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee" + request);
  spotify.spotifyCall("The Sign")
} else if (action == "spotify-this-song"){
  spotify.spotifyCall(request);
}

if (action == "concert-this" && request == "") {
  bandsintown.bandsintownCall("3 doors down")
} else if (action == "concert-this"){
  bandsintown.bandsintownCall(request);
}

if (action == "movie-this" && request == ""){
  omdb.omdbcall("Mr.Nobody");
} else if (action == "movie-this"){
  omdb.omdbCall(request);
}