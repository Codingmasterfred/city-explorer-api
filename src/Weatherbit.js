const axios = require("axios");

exports.weather = (req, res) => {
    const key = "8ad3f03cbf764e8c800aef943c20e5d6";
    // /weather is the created endpoint 
    let { lat, lon } = req.query;
    // setting the parameter as the property of the object I want to access
    let WeatherData = axios.get(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lon}`)
        .then((response) => {
            let WeatherDataInfo = response.data.data.map(arr => {
                let NewWeatherData = new Forecast(arr.datetime, arr.weather.description, arr.lat, arr.lon, arr.city_name);
                return NewWeatherData;
            });
            res.send(WeatherDataInfo);
        });
};
class Forecast {
    //create the class name forcast 
    //classes are used to create object
    constructor(date, description, lat, lon, city_name) {
        // creates a constructor and pass in parameters to represent the properties of the objects created 
        this.date = date
        this.description = description
        this.lat = lat
        this.lon = lon
        this.city_name = city_name
    }

}