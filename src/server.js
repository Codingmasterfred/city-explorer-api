const express = require('express')
// express is another way to import libraries on the server side 
//importing weather.json file and applying it to a variable
const cors = require('cors')
//importing cors for security reasons 
require("dotenv").config()
// chat gpt 4
const axios = require("axios")

const Forecast = require("./Weatherbit")

const MoviesExported = require("./Movies")

// const fetch = require('node-fetch');


const app = express()
// setting a variable to use express
app.use(cors())
// implementing cors which is middlewear
app.get("/",(req,res)=>{
    res.send("U did It")
})
app.get("/weather",Forecast.weather

    // let DataInfo = Data.data.map( arrr => {
    //     // mapping through the item that pass the if statement which is Data
    //     // but Data is an object so cant use the map method so im accessing Data.data
    //     //Data.data is the array within the slected object 
    //   let Place = new Forecast(arrr.valid_date, arrr.weather.description, Data.lat, Data.lon, Data.city_name)
    //   // makes an instance of the forcast class within the map method to aceess the array items 

    //   return Place
    // return the Place variable which represent the new instance of forcast
)

app.get("/movies",MoviesExported.moviesFunction

// res.send(DataInfo)
// // res.send() is a method to send data to the client side/front end
// in this case we are returning the Place from the map method which create the new instances 
)








app.listen(3001)
// app.listen method let you actually see what your site lokks like
