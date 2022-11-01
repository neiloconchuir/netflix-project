import React, { useState, useEffect } from 'react'
import axios from './axios';
import requests from './requests';
import './banner.css';

function Banner() {
  const [movie, setMovie] = useState([]);

  // code runs on page load
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length - 1)])
      return request;
    }
    fetchData();
  }, []);



  // function to limit displayed copy on page when called
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(
        "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
      )`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title" >
          {/* ? handles any errors and || handles edge cases */}
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <div className="banner-buttons">
          <button className="banner-button">Play</button>
          <button className="banner-button">My List</button>
        </div>
        <p className="banner-description">
          {truncate(movie?.overview, 150)}
        </p>
      </div>
      <div className="banner-fade-bottom"></div>
    </header>
  );
}

export default Banner