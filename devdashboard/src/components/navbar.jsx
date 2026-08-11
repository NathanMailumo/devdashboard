import {Link} from "react-router-dom";
import "./navbar.css";

export function NavBar(){
    return(
        <div className="sidebar">
        <a className="logo" href="">
          NAME.COM
        </a>
        <h3><Link to="/">Dashboard</Link></h3>
        <div className="menu">
          <ul>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/favourites">Favourites</Link></li>
            <li><Link to="/trash">Trash</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </div>
      </div>
    )
}