import { HomePage } from "./pages/homepage";
// import {Link} from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navbar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ProjectsPage } from "./pages/projectspage";
import { FavouritePage } from "./pages/favourite.jsx";
import { Trash } from "./pages/trash.jsx";

function App() {
  const [isFavourite, setIsFavourite] = useState([]);

  const [isTrash, setIsTrash] = useState([]);

  const toggleFavourite = (title) => {
    setIsFavourite((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item !== title)
        : [...prev, title],
    );
  };

  const toggleTrash = (title) => {
    setIsTrash((prev) =>
      prev.includes(title)
        ? prev.filter((item) => item != title)
        : [...prev, title],
    );

    setIsFavourite((prev) =>
        prev.filter((item) => item !== title)
    );
  };

  return (
    <div className="app">
      <NavBar />
      <main className="app-content">
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                isFavourite={isFavourite}
                toggleFavourite={toggleFavourite}
                isTrash = {isTrash}
                toggleTrash = {toggleTrash} 
              />
            }
          />
          <Route
            path="/projects"
            element={
              <ProjectsPage
                isFavourite={isFavourite}
                toggleFavourite={toggleFavourite}
                isTrash = {isTrash}
                toggleTrash = {toggleTrash} 
              />
            }
          />
          <Route
            path="/favourites"
            element={
              <FavouritePage
                isFavourite={isFavourite}
                toggleFavourite={toggleFavourite}
                isTrash = {isTrash}
                toggleTrash = {toggleTrash} 
              />
            }
          />
          <Route
            path="/trash"
            element={
              <Trash
                isFavourite={isFavourite}
                toggleFavourite={toggleFavourite}
                isTrash = {isTrash}
                toggleTrash = {toggleTrash} 
              />
            }
          />
          <Route
            path="/settings"
            element={
              <ProjectsPage
                isFavourite={isFavourite}
                toggleFavourite={toggleFavourite}
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
