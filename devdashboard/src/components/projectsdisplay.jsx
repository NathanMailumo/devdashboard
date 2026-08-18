import { otherProjects } from "../data/projects"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import './projectsdisplay.css'

export function ProjectsDisplay({isTrash, isSearch, isFavourite, toggleFavourite, toggleTrash}){
    return(
        <div className="projects-grid">
        {otherProjects
          .filter((project)=> project.title.toLowerCase().replace(/\s+/g, '').includes(isSearch.toLowerCase().replace(/\s+/g, ''))) 
          .filter((project) => !isTrash.includes(project.id))
          .map((project) => (
            <article className="project-container" key={project.id}>
            <Link  to={`/projectdetails/${project.id}`}>
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
                </div>
            </Link>

                <button
                  type="button"
                  className={`favourite-button ${
                    isFavourite.includes(project.id) ? "is-active" : ""
                  }`}
                  onClick={() => toggleFavourite(project.id)}
                  aria-label={`Toggle favorite for ${project.title}`}
                >
                  <FontAwesomeIcon
                    icon={
                      isFavourite.includes(project.id)
                        ? faHeartSolid
                        : faHeartRegular
                    }
                  />
                </button>
                <button
                  type="button"
                  onClick={() => toggleTrash(project.id)}
                  className={`trash-button ${
                    isTrash.includes(project.id) ? "is-active" : ""
                  }`}
                  aria-label={`Move ${project.title} to trash`}
                >
                  <FontAwesomeIcon icon={faTrash} />
                </button>
            </article>
          ))}
      </div>
    )
}