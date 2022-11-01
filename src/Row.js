import React, { useState, useEffect } from 'react';
import axios from './axios';
import './row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';



function Row({ title, fetchUrl, isLargeRow }) {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  // code runs on page load
  useEffect(() => {

    // async function returns a promise
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
    // if [] code runs once on page load
    // if dependancy added page will reload when change is made
    // fetchUrl stated dependancy as it is pulled in from outside of the function
  }, [fetchUrl]);

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };

  const handleClick = (movie) => {
    if(trailerUrl) {
      setTrailerUrl('');
    } else {
      movieTrailer(movie?.name || "")
      .then(url => {
        // https://www.youtube.com/watch?v=XtMThy8QKqU
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get('v'));
      })
      .catch(error => console.log(error))
    }
  }

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            onClick={() => handleClick(movie)}
            className={`row-poster ${isLargeRow && "row-poster-large"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;