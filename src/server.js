const express = require('express')
// express is another way to import libraries on the server side 
const data = require('../data/weather.json');
//importing weather.json file and applying it to a variable
const cors = require('cors')
//importing cors for security reasons 
require("dotenv").config()
// chat gpt 4


const app = express()
// setting a variable to use express
app.use(cors())
// implementing cors which is middlewear
app.get("/weather", (req, res) => {
    // /weather is the created endpoint 
    let {lat,lon,searchQuery}  = req.query;
    // setting the parameter as the property of the object i want to access
    let Data = data.find(arr => {
        // using the find() method on the data variable which represent the weather.json 
        if (arr.city_name != searchQuery && arr.lon != lon && arr.lat != lat) {
        // using a if statement to pull on specific item from the data/weather.json array 
            return false;
        } else {
            return true
        }
    })
    if(Data === undefined){
        // if the Data doesnt has a value it means the process didnt work correctly
        res.status(500).send("error")
        // "res" stand for respond which is sent to the client side 
        //"status" is a method to report a specific status code in this case 500
        // "send" is a method to send custom messages to client side in this case error
    }
    let DataInfo = Data.data.map( arrr => {
        // mapping through the item that pass the if statement which is Data
        // but Data is an object so cant use the map method so im accessing Data.data
        //Data.data is the array within the slected object 
      let Place = new Forecast(arrr.valid_date, arrr.weather.description, Data.lat, Data.lon, Data.city_name)
      // makes an instance of the forcast class within the map method to aceess the array items 

      return Place
      // return the Place variable which represent the new instance of forcast
    })

    res.send(DataInfo)
    // res.send() is a method to send data to the client side/front end
    // in this case we are returning the Place from the map method which create the new instances 
   

}
)

class Forecast{
    //create the class name forcast 
    //classes are used to create object
    constructor(date,description,lat,lon,city_name){
        // creates a constructor and pass in parameters to represent the properties of the objects created 
        this.date = date
        this.description = description
        this.lat = lat
        this.lon = lon
        this.city_name = city_name
    }

}

app.listen(3001)
// app.listen method let you actually see what your site lokks like 
