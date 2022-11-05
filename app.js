//modules
const express = require('express');
const https = require('node:https'); //native to node - could use axios or others etc

const app = express();
const port = 3000;
const apiKey = 'aaf8ff4104d2f272e069a0be058e3533'; //normally would store this elsewhere

app.get("/", (req, res) => {

  const query = "Toronto";
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`;

  https.get(weatherURL, (response) => {
    console.log(response.statusCode)

    response.on("data", (data) => {
      const weatherData = JSON.parse(data);
      console.log(weatherData);
      const weatherTemp = weatherData.main.temp; //temp is showing up as 255+ lol
      const weatherDesc = weatherData.weather[0].description; //description object inside a single array
      const weatherIcon = weatherData.weather[0].icon;
      const imageURL = "http://openweathermap.org/img/wn/" + weatherIcon + ".png";

      res.write("<h1>The temperate is " + weatherTemp + " degrees</h1>");
      res.write("<h3>Description: " + weatherDesc + "</h3>");
      res.write("<img src=" + imageURL + " alt='icon' />");
      res.send();
    })
  })
})

app.listen(port, () => {
  console.log("Listening on " + port);
})
