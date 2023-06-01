const axios = require("axios");
const NodeCache = require("node-cache");
const cache = new NodeCache()

exports.moviesFunction = (req, res) => {
    const key = "f2fd90c52646bfddae4c299d330e18ee";
    let { query } = req.query
    let moviesSaved = cache.get(query)
    if (moviesSaved === undefined) {
        console.log("missed")
        let firstMoviesData = axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`)
            .then((response) => {
                let MoviesData = response.data.results.map(arr => {
                    let NewWeatherData = new Movies(arr.original_title)
                    return NewWeatherData
                })
                cache.set(query, MoviesData)
                res.json(MoviesData)

                // res.send(MoviesData)
            });
    }else{
        console.log("hit")

        return (cache.get(query))
    }
    class Movies {

        constructor(Title) {
            this.Title = Title;


        }

    }

}