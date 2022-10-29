import React from "react";
import axios from "axios";

export default function Genre() {

  function handleResponse(response) {
    console.log(response.data.genres);
  }

  const apiKey = "682beed266315e592dc46b1df437b7d0";
  const genreUrl = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`;

  axios.get(genreUrl).then(handleResponse);

  return (
    <section className="Genre">
      hello from Genre!
    </section>
  )
}