import {Link} from "react-router-dom";
import "./navbar.css";

export function NavBar(){
    return(
        <nav className="navbar">
          <Link className="logo" to="/">
            NAME.COM
          </Link>

          <div className="navbar-main menu">
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/favourites">Favorites</Link></li>
              <li><Link to="/trash">Trash</Link></li>
            </ul>
          </div>

          <div className="navbar-bottom menu">
            <ul>
              <li><Link to="/settings">Settings</Link></li>
            </ul>
          </div>
        </nav>
    )
}