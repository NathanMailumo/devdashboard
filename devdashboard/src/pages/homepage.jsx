import "./homepage.css";
import heroImage from "../assets/hero.png";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
// import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
// import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { otherProjects } from "../data/projects";
import { ProjectsDisplay } from "../components/projectsdisplay";

export function HomePage({
  isFavourite,
  toggleFavourite,
  isTrash,
  toggleTrash,
  search,
  isSearch,
}) {
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
            onChange={search}
            value={isSearch}
          />
        </div>

        <ProjectsDisplay
          isFavourite={isFavourite}
          isSearch={isSearch}
          isTrash={isTrash}
          toggleFavourite={toggleFavourite}
          toggleTrash={toggleTrash}
        />
      </section>
    </div>
  );
}
