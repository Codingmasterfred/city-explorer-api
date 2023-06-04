const axios = require("axios");
const NodeCache = require("node-cache");
const cache = new NodeCache();

exports.moviesFunction = (req, res) => {
  const key = "f2fd90c52646bfddae4c299d330e18ee";
  let { query } = req.query;

//   if (!query) {
//     // Handle the case when the query parameter is missing or undefined
//     res.status(400).json({ error: "Missing query parameter" });
//     return;
//   }

  let moviesSaved = cache.get(query);

  if (moviesSaved === undefined) {
    console.log("missed");
    axios
      .get(`https://api.themoviedb.org/3/search/movie?api_key=${key}&query=${query}`)
      .then((response) => {
        let MoviesData = response.data.results.map((arr) => {
          let NewWeatherData = new Movies(arr.original_title);
          return NewWeatherData;
        });
        cache.set(query, MoviesData);
        res.json(MoviesData);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).json({ error: "Internal server error" });
      });
  } else {
    console.log("hit");
    res.json(moviesSaved);
  }
};

class Movies {
  constructor(Title) {
    this.Title = Title;
  }
}