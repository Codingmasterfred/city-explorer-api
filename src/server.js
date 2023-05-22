const express = require('express')
// express is another way to import libraries on the server side 
//importing weather.json file and applying it to a variable
const cors = require('cors')
//importing cors for security reasons 
require("dotenv").config()
// chat gpt 4
const axios = require("axios")

// const fetch = require('node-fetch');


const app = express()
// setting a variable to use express
app.use(cors())
// implementing cors which is middlewear
app.get("/weather", (req, res) => {
    const key = "7824266f64ef4a98a7321ad86d61eaf3"
    // /weather is the created endpoint 
    let { lat, lon } = req.query;
    // setting the parameter as the property of the object i want to access
    let WeatherData = axios.get(`https://api.weatherbit.io/v2.0/current?key=${key}&lat=${lat}&lon=${lon}`)
        .then((response) => {
            console.log(response)
            let WeatherDataInfo = response.data.data.map(arr => {
                let NewWeatherData = new Forecast(arr.datetime, arr.weather.description, arr.lat, arr.lon, arr.city_name)
                return NewWeatherData
            })
            res.send(WeatherDataInfo)
        })

    // let DataInfo = Data.data.map( arrr => {
    //     // mapping through the item that pass the if statement which is Data
    //     // but Data is an object so cant use the map method so im accessing Data.data
    //     //Data.data is the array within the slected object 
    //   let Place = new Forecast(arrr.valid_date, arrr.weather.description, Data.lat, Data.lon, Data.city_name)
    //   // makes an instance of the forcast class within the map method to aceess the array items 

    //   return Place
    // return the Place variable which represent the new instance of forcast
})

app.get("/movies", (req, res) => {
    const key = "f2fd90c52646bfddae4c299d330e18ee";
    let { query } = req.query
    let firstMoviesData = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`)
        .then((response) => {
            console.log("Here", response)
            let MoviesData = response.data.results.map(arr => {
                let NewWeatherData = new Movies(arr.original_title)
                return NewWeatherData
            })
            res.json(MoviesData)

            // res.send(MoviesData)
        });
})

// res.send(DataInfo)
// // res.send() is a method to send data to the client side/front end
// in this case we are returning the Place from the map method which create the new instances 






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

class Movies {

    constructor(Title) {
        this.Title = Title;


    }

}






app.listen(3001)
// app.listen method let you actually see what your site lokks like
