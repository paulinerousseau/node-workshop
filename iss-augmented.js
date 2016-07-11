var request = require('request');
var prompt = require("prompt");

Number.prototype.toRadians = function() {
    return this * Math.PI / 180;
};
function distanceToIss(lat1, lat2, lon1, lon2) {
    var R = 6371e3; // metres
    var φ1 = lat1.toRadians();
    var φ2 = lat2.toRadians();
    var Δφ = (lat2 - lat1).toRadians();
    var Δλ = (lon2 - lon1).toRadians();

    var a = Math.sin(Δφ / 2) * Math.sin(Δφ / 2) +
        Math.cos(φ1) * Math.cos(φ2) *
        Math.sin(Δλ / 2) * Math.sin(Δλ / 2);
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    var d = R * c;

    console.log(d);
};

prompt.start();

prompt.get('location', function(err, response) {
    if (err) {
        console.log('there was an error');
    }
    else {
        console.log(response);
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + response.location;
        request(url, function(err, response) {
            if (err) {
                console.log("there was an error");
            }
            else {
                var data = JSON.parse(response.body).results[0].geometry.location;
                console.log(data);
                var lat1 = data.lat;
                var lon1 = data.lng;
                var url = 'http://api.open-notify.org/iss-now.json';
                request(url, function(err, response) {

                    if (err) {
                        console.log('there was an error');
                    }
                    else {
                        var data = JSON.parse(response.body).iss_position;
                        var lat2 = data.latitude;
                        var lon2 = data.longitude;
                        distanceToIss(lat1, lat2, lon1, lon2)
                    }
                })
            }
        });
    }
})
