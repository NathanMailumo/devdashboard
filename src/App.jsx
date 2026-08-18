import { HomePage } from "./pages/homepage";
// import {Link} from "react-router-dom";
import "./App.css";
import { NavBar } from "./components/navbar";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { ProjectsPage } from "./pages/projectspage";
import { FavouritePage } from "./pages/favourite.jsx";
import { Trash } from "./pages/trash.jsx";
import { ProjectDetails } from "./pages/projectDetails.jsx";
// import { otherProjects } from "./data/projects.js";

function App() {
  const [isFavourite, setIsFavourite] = useState([]);

  const [isTrash, setIsTrash] = useState([]);

  const [isSearch, setIsSearch] = useState('')

  const toggleFavourite = (id) => {
    setIsFavourite((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id],
    );
  };

  const toggleTrash = (id) => {
    setIsTrash((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item != id)
        : [...prev, id],
    );

    setIsFavourite((prev) =>
        prev.filter((item) => item !== id)
    );
  };

  const search = (event)=>{
      setIsSearch(event.target.value)
  }

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
                isSearch = {isSearch} 
                search = {search} 
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
                isSearch = {isSearch} 
                search = {search} 
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
                isTrash = {isTrash}
                toggleTrash = {toggleTrash} 
              />
            }
          />
          <Route
           path={`/projectDetails/:id`}
            element={
              <ProjectDetails
                isFavourite={isFavourite}
                toggleFavourite={toggleFavourite}
                isTrash = {isTrash}
                toggleTrash = {toggleTrash} 
              />
            }
          />
        </Routes>
      </main>
    </div>
  );
}

export default App;
