//modules
const express = require('express');
const https = require('node:https'); //native to node - could use fetch, axios etc

const app = express();
const port = 3000;

const lat = 43.4819027;
const lon = -79.8427059;
const apiKey = 'aaf8ff4104d2f272e069a0be058e3533'; //normally would store this elsewhere

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

app.get("/", (req, res) => {
  https.get(weatherURL, (response) => {
    console.log(response.statusCode)

    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const weatherTemp = weatherData.main.temp + "(Seriously?)";
      const weatherDesc = weatherData.weather[0].description;

      console.log("Temperature " + weatherTemp + " with " + weatherDesc);
    })
  })
  res.send("View console log for weather data(for now)");
})

app.listen(port, () => {
  console.log("Listening on " + port);
})
