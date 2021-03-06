var bandsintownCall = function bandsintownCall(bandsName) {
    var axios = require("axios");
    var moment = require("moment");

    axios.get("https://rest.bandsintown.com/artists/" + bandsName + "/events?app_id=codingbootcamp").then(
        function (response) {
            var dateConversion = moment(response.data[0].datetime).format('l');
            // console.log("Venue: " + response.data[0].venue.name);
            // console.log("Location: " + response.data[0].venue.city + ", " + response.data[0].venue.region)
            // console.log("Date: " + dateConversion)

            var events = response.data;
            for(var i = 0; i < events.length; i++){

                console.log('Venue: ',events[i].venue.name);
                console.log("Location: ",events[i].venue.city + ", " + events[i].venue.region);
                console.log('Date: ',moment(events[i].datetime).format('l'));
                console.log('*************************************************************************');
            }
        })
        .catch(function (error) {
            console.log(error);
        });
}

module.exports.bandsintownCall = bandsintownCall;