const axios = require("axios");

exports.moviesFunction = (req, res) => {
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
        class Movies {

            constructor(Title) {
                this.Title = Title;
        
        
            }
        
        }
}