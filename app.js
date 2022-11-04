//modules
const express = require('express');
const https = require('node:https'); //native to node

const app = express();
const port = 3000;

const lat = 43.4819027;
const lon = -79.8427059;
const apiKey = 'aaf8ff4104d2f272e069a0be058e3533';

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

app.get("/", (req, res) => {
  //https.get(weatherURL)
  res.send(weatherURL);
})

app.listen(port, () => {
  console.log("Listening on " + port);
})
