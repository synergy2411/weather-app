const request = require("request");

let getLocationCoordinates = (address, callabck) => {
    request({
        url: "https://maps.googleapis.com/maps/api/geocode/json?address=" + address + "&key=AIzaSyD4IbzDVGHQCahG4NSiL_DUgf6nq6D3J8A",
        json: true
    }, (error, response, body) => {
        if (error) {
            callabck("Unable to reach Google Server.");
            return;
        }else {
            callabck(null, body.results[0].geometry.location, body.results[0].formatted_address )
        }

        // console.log(body);
    })
}

module.exports.getLocationCoordinates = getLocationCoordinates;
