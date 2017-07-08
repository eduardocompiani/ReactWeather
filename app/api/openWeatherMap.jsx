var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=f71a0ff62d98f2a34265f4c8e157f366&units=metric';

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestURL = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestURL).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw new Error(res.datamessage);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error('Unable to fetch weather for that location');
    });
  }
}
