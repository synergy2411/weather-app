const request = require("request");

let getForecastDetails = (lat, lng, callback) =>{
    request({
        // url : "https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/37.8267,-122.4233",
        url : `https://api.darksky.net/forecast/473fe696d21e65026547b2d50b56014c/${lat},${lng}`,
        json : true
    }, (error, response, body)=>{
        if(error) {
            console.log(error);
            callback(error)
        }else{
            callback(null, {
                temperature : body.currently.temperature,
                summary : body.daily.summary
            })
        }
        // console.log(JSON.stringify(body, undefined, 2));
    })
} 

module.exports.getForecastDetails = getForecastDetails;