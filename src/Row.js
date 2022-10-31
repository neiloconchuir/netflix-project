import React, { useState, useEffect } from 'react';
import axios from './axios';
import './row.css';



function Row({ title, fetchUrl, isLargeRow }) {
  const baseUrl = "https://image.tmdb.org/t/p/original/";
  const [movies, setMovies] = useState([]);

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

  // console.log(movies);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row-poster ${isLargeRow && "row-poster-large"}`}
            src={`${baseUrl}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  );
}

export default Row;