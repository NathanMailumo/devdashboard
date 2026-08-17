import {Link} from "react-router-dom";
import "./navbar.css";

export function NavBar(){
    return(
        <nav className="navbar">
          <a className="logo" href="/">
            NAME.COM
          </a>
          <div className="menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/favourites">Favorites</Link></li>
              <li><Link to="/trash">Trash</Link></li>
              <li><Link to="/settings">Settings</Link></li>
            </ul>
          </div>
        </nav>
    )
}