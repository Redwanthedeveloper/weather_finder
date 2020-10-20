const axios = require("axios");
const API_KEY = "7b723f7749337b01cbe9efaac6a1475b";

exports.HomePage = (req, res) => {
  res.render("index");
};
exports.AboutPage = (req, res) => {
  res.render("about");
};
exports.getWeather = (req, res) => {
  const city = req.body.city;
  const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

  axios
    .get(url)
    .then((response) => {
      res.render("index", {
        weather: `It is currently ${response.data.main.temp} degree celcius in location ${response.data.name}, ${response.data.sys.country}`,
      });
    })
    .catch((error) => {
      console.log(error);
    });
};
