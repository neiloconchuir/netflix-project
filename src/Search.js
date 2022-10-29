import React from "react";
import axios from "axios";

export default function Search() {
    function handleResponse(response) {
      console.log(response.data.results);
    }

    const apiKey = "682beed266315e592dc46b1df437b7d0";
    const searchTerm = "Fury";
    const apiUrl = `
https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=1&include_adult=true`;
    

 axios.get(apiUrl).then(handleResponse);

   return (
      <div className="Search">
        <form className="Search-form">
          <input type="search" placeholder="Search..."></input>
          <button type="submit">Search</button>
        </form>
      </div>
    );
}