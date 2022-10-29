import React from 'react';
import "./header.css";
import Search from "./Search";

export default function Header() {


  return (
    <section className="Header">
      <nav>
        <ul>
          <li>Logo image</li>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </nav>
      <div className="Header-icons">
        <Search />
        <ul>
          <li>
            FontAwesomeIcon
          </li>
          <li>Kids</li>
          <li>
            FontAwesomeIcon 
          </li>
        </ul>
      </div>
    </section>
  );
}
