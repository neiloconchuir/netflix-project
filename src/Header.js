import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
/* import {
  solid,
  regular,
  brands,
  icon,
} from "@fortawesome/fontawesome-svg-core/import.macro"; */
// import { faMagnifyingGlass, faBell } from "@fortawesome/free-solid-svg-icons";
import "./header.css";

export default function Header() {
  return (
    <section className="Header">
      <navbar>
        <ul>
          <li>Logo image</li>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </navbar>
      <div className="Header-icons">
        <ul>
          <li>
            <FontAwesomeIcon icon="faMagnifyingGlass fa-solid " />
          </li>
          <li>Kids</li>
          <li>
            <FontAwesomeIcon icon="faBell fa-solid" />
          </li>
        </ul>
      </div>
    </section>
  );
}
