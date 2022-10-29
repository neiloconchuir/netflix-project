import React, { useState} from "react";
import axios from "axios";

export default function Search() {
    function handleResponse(response) {
      console.log(response.data.results);
    }

    const apiKey = "682beed266315e592dc46b1df437b7d0";
    const searchTerm = "Jack+Reacher"
    const apiUrl = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${searchTerm}`;

    axios.get(apiUrl).then(handleResponse);

    https: return (
      <div className="Search">
        <form className="Search-form">
          <input type="search" placeholder="Search..."></input>
          <button type="submit">Search</button>
        </form>
      </div>
    );
}