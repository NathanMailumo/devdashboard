import "./projectspage.css";
// import heroImage from "../assets/hero.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { otherProjects } from "../data/projects";
import { ProjectsDisplay } from "../components/projectsdisplay";
// import { ProjectsDisplay } from "../components/projectsdisplay";

// import { useState } from "react";

export function ProjectsPage({
  isFavourite,
  toggleFavourite,
  isTrash,
  toggleTrash,
  isSearch,
  search,
}) {
  return (
    <section className="projects-page">
      <div className="homepage-header">
        <input
          className="project-search"
          type="text"
          placeholder="Search Projects"
          onChange={search}
          value={isSearch}
        />
      </div>

      <div className="section-heading">
        <h3>All Projects</h3>
        <span>{otherProjects.length} projects</span>
      </div>

      <ProjectsDisplay isFavourite={isFavourite} isSearch={isSearch} isTrash={isTrash} toggleFavourite={toggleFavourite} toggleTrash={toggleTrash}/>
    </section>
  );
}
