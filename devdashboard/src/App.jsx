import { HomePage } from "./components/homepage";
// import {Link} from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navbar";

function App() {
  
  return (
    <div className="app">
      <NavBar />
      <HomePage/>
    </div>
  );
}

export default App;
