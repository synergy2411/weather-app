const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");
const geoCode = require("./utils/geocode");
const forecast = require("./utils/forecast");

app.use(express.static(path.join(__dirname, "../public")));
const viewsPath = path.join(__dirname, '../templates/views');
const partialsPath = path.join(__dirname, '../templates/partials');

app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

app.get("", (req, res) => {
    res.render("index", {
        title: "Weather App",
        name: "Sumit Khandelwal"
    })
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "About Me",
        name: "Sumit Khandelwal"
    })
})

app.get("/help", (req, res) => {
    res.render("help", {
        title: "Help",
        name: "Sumit Khandelwal"
    })
});

app.get("/weather", (req, res) => {
    if (!req.query.address) {
        return res.send({
            error: "Address to be provided."
        })
    }

    geoCode.getLocationCoordinates(req.query.address, (error, results, address) => {
        if (error) {
            return res.send({ error });
        } else {
            forecast.getForecastDetails(results.lat, results.lng, (error, forecastResult) => {
                if (error) {
                    console.log("Error", error);
                }
                res.send({
                    location: address,
                    temperature: forecastResult.temperature,
                    forecast: forecastResult.summary
                })
            });
        }
    });
})


app.get("/help/*", (req, res) => {
    res.render("404page", {
        errorMessage: "Help article not found."
    })
});
app.get("/*", (req, res) => {
    res.render("404page", {
        errorMessage: "Page not found."
    })
});
app.listen(3000, () => {
    console.log("Server started at Port 3000...")
})