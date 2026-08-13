import { HomePage } from "./pages/homepage";
// import {Link} from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navbar";
import { useState } from "react";
import {Routes ,Route} from 'react-router-dom'
import { ProjectsPage } from "./pages/projectspage";
import { FavouritePage } from "./pages/favourite.jsx";

function App() {

  const [isFavourite, setIsFavourite] = useState([]);
  
    const toggleFavourite = (title) => {
      setIsFavourite((prev) =>
        prev.includes(title)
          ? prev.filter((item) => item !== title)
          : [...prev, title],
      );
    };
  
  return (
    <div className="app">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage isFavourite={isFavourite} toggleFavourite={toggleFavourite}/>} />
        <Route path="/projects" element={<ProjectsPage isFavourite={isFavourite} toggleFavourite={toggleFavourite}/>} />
        <Route path="/favourites" element={<FavouritePage isFavourite={isFavourite} toggleFavourite={toggleFavourite}/>} />
        <Route path="/trash" element={<ProjectsPage isFavourite={isFavourite} toggleFavourite={toggleFavourite}/>} />
        <Route path="/settings" element={<ProjectsPage isFavourite={isFavourite} toggleFavourite={toggleFavourite}/>} />
      </Routes>
    </div>
  );
}

export default App;
