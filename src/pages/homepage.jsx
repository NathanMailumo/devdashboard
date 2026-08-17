import "./homepage.css";
import heroImage from "../assets/hero.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import {otherProjects} from "../data/projects"

export function HomePage({isFavourite, toggleFavourite, isTrash, toggleTrash}) {

  return (
    <div className="homepage">
      <section className="featured-project">
        <div className="featured-project-media">
          <img src={heroImage} alt="New project" />
        </div>
        <div className="featured-project-content">
          <span className="featured-label">New Project</span>
          <h2>Start something new</h2>
          <p>
            Create a fresh workspace, add your team, and keep everything
            organized from day one.
          </p>
          <div className="featured-actions">
            <a className="primary-action" href="">
              Create Project
            </a>
            <span className="secondary-action">Set up in a few clicks</span>
          </div>
        </div>
      </section>

      <section className="projects-section">
        <div className="section-heading">
          <h3>Other Projects</h3>
          <span>{otherProjects.length} projects</span>
        </div>

        <div className="homepage-header">
          <input
            className="project-search"
            type="text"
            placeholder="Search Projects"
          />
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
                    icon={isFavourite.includes(project.title) ? faHeartSolid : faHeartRegular}
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
                    <FontAwesomeIcon icon = {faTrash}/>
                </button>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
