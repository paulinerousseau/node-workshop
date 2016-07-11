
var request = require('request');

var url = 'http://api.open-notify.org/iss-now.json';

request(url, function(err, response) {

if (err) {
        console.log('there was an error');
    }
    else {
        var data = JSON.parse(response.body).iss_position;
        var lat = data.latitude.toFixed(2);
        var long = data.longitude.toFixed(2);
        console.log(lat,long);
    }
});

