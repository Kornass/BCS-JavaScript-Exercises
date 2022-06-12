// Create a movie database using real movies data coming from the omdbapi API.
// You should prompt the title of the movie to the user, then using the fetch
// method get the movie data from the API and finally, if the movie doesn't exist,
// insert it inside the database and return the entire database otherwise return
// a message: Movie ${title} already exists in the database.

const database = [
	{
	  genre: "comedy",
	  movies: [{}, {}],
	},
	{
	  genre: "thriller",
	  movies: [{}, {}],
	},
	{
	  genre: "horror",
	  movies: [{}, {}],
	},
  ];
  const getMovie = async () => {
	let movieTitle = prompt("Enter movie title");
	let movie = await fetch(`https://omdbapi.com?t=${movieTitle}&apikey=thewdb`);
	let movieJSON = await movie.json();
	let movieObj = {
	  Title: movieJSON.Title,
	  Actors: movieJSON.Actors,
	  Directors: movieJSON.Director,
	  Genre: movieJSON.Genre,
	  Awards: movieJSON.Awards,
	  Poster: movieJSON.Poster,
	  Released: movieJSON.Released,
	  Plot: movieJSON.Plot,
	};
	let genres = []; // [g1,g2,g3]
	genres.push(movieJSON.Genre);
	//   debugger;
	genres.forEach((ele) => {
	  for (let movies of database) {
		if (movies.genre != ele) {
		  database.push({ genre: ele, movies: [{ movieObj }] });
		} else {
		  movies.movies.forEach((obj) => {
			if (obj.Title == movieObj.Title) {
			  return `Movie ${movieObj.Title} already exist in the database`;
			} else {
			  obj.movies.push(movieObj);
			}
		  });
		}
	  }
	  return database;
	});
  
  
  getMovie();