import "./projectspage.css";
import heroImage from "../assets/hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faTrash} from "@fortawesome/free-solid-svg-icons";

// import { useState } from "react";

export function ProjectsPage({ isFavourite, toggleFavourite, isTrash, toggleTrash }) {
  const otherProjects = [
    {
      title: "Project 1",
      description: "Project 1 Description",
      stack: "Project 1 Stack",
      status: "Active",
      image: heroImage,
    },
    {
      title: "Project 2",
      description: "Project 2 Description",
      stack: "Project 2 Stack",
      status: "In Review",
      image: heroImage,
    },
    {
      title: "Project 3",
      description: "Project 3 Description",
      stack: "Project 3 Stack",
      status: "Planned",
      image: heroImage,
    },
    {
      title: "Project 4",
      description: "Project 4 Description",
      stack: "Project 4 Stack",
      status: "In Review",
      image: heroImage,
    },
    {
      title: "Project 5",
      description: "Project 5 Description",
      stack: "Project 5 Stack",
      status: "Planned",
      image: heroImage,
    },
    {
      title: "Project 6",
      description: "Project 6 Description",
      stack: "Project 6 Stack",
      status: "Active",
      image: heroImage,
    },
  ];
  return (
    <section className="projects-page">
      <div className="homepage-header">
        <input
          className="project-search"
          type="text"
          placeholder="Search Projects"
        />
      </div>

      <div className="section-heading">
        <h3>All Projects</h3>
        <span>{otherProjects.length} projects</span>
      </div>

      <div className="projects-grid">
        {otherProjects
        .filter((project) => !isTrash.includes(project.title))
        .map((project) => (
          <article className="project-container" key={project.title}>
            <img src={project.image} alt={project.title} />
            <div className="project-content">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className="project-status">{project.status}</span>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-meta">
                <p>
                  <strong>Stack:</strong> {project.stack}
                </p>
              </div>
              <button
                type="button"
                className={`favourite-button ${
                  isFavourite.includes(project.title) ? "is-active" : ""
                }`}
                onClick={() => toggleFavourite(project.title)}
                aria-label={`Toggle favorite for ${project.title}`}
              >
                <FontAwesomeIcon
                  icon={
                    isFavourite.includes(project.title)
                      ? faHeartSolid
                      : faHeartRegular
                  }
                />
              </button>
              <button
                type="button"
                onClick={() => toggleTrash(project.title)}
                className={`trash-button ${
                  isTrash.includes(project.title) ? "is-active" : ""
                }`}
                aria-label={`Move ${project.title} to trash`}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
