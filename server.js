const express = require('express')
// express is another way to import libraries on the server side 
const data = require('./data/weather.json');
//importing weather.json file and applying it to a variable
const cors = require('cors')
//importing cors for security reasons 
require("dotenv").config()
// chat gpt 4


const app = express()
app.use(cors())
app.get("/weather", (req, res) => {
    let {lat,lon,searchQuery}  = req.query;
    let Data = data.find(arr => {
        if (arr.city_name != searchQuery && arr.lon != lon && arr.lat != lat) {
            return false;
        } else {
            return true
        }
    })
    if(Data === undefined){
        res.status(500).send("error")
    }
    let DataInfo = Data.data.map( arrr => {
      let Place = new Forecast(arrr.valid_date, arrr.weather.description, Data.lat, Data.lon, Data.city_name)
      return Place
    })

    res.send(DataInfo)
   

}
)

class Forecast{
    constructor(date,description,lat,lon,city_name){
        
        this.date = date
        this.description = description
        this.lat = lat
        this.lon = lon
        this.city_name = city_name
    }

}

app.listen(3001)
