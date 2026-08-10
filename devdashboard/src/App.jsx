import { HomePage } from "./components/homepage";
import "./App.css";

function App() {
  
  return (
    <div className="app">
      <div className="sidebar">
        <a className="logo" href="">
          NAME.COM
        </a>
        <h3>Dashboard</h3>
        <div className="menu">
          <ul>
            <li>Projects</li>
            <li>Favourites</li>
            <li>Trash</li>
          </ul>
        </div>
      </div>

      <HomePage/>
    </div>
  );
}

export default App;
