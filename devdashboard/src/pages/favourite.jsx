import "./favourite.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { otherProjects } from "../data/projects.js";

export function FavouritePage({ isFavourite, toggleFavourite }) {
  const favouriteProjects = otherProjects.filter((project) =>
    isFavourite.includes(project.title),
  );

  return (
    <section className="favourites-page">
      <div className="favourites-header">
        <div>
          <span className="favourites-kicker">Saved items</span>
          <h1>Favourite Projects</h1>
        </div>
        <span className="favourites-count">{favouriteProjects.length} saved</span>
      </div>

      {favouriteProjects.length === 0 ? (
        <div className="favourites-empty-state">
          <h2>No favourite projects yet.</h2>
          <p>Tap the heart icon on a project card to save it here.</p>
        </div>
      ) : (
        <div className="favourites-grid">
          {favouriteProjects.map((project) => (
            <article className="project-card" key={project.title}>
              <img src={project.image} alt={project.title} />

              <div className="project-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="project-stack">
                  <strong>Stack:</strong> {project.stack}
                </p>

                <button
                  type="button"
                  className={`favourite-button ${
                    isFavourite.includes(project.title) ? "is-active" : ""
                  }`}
                  onClick={() => toggleFavourite(project.title)}
                  aria-label={`Remove ${project.title} from favourites`}
                >
                  <FontAwesomeIcon
                    icon={
                      isFavourite.includes(project.title)
                        ? faHeartSolid
                        : faHeartRegular
                    }
                  />
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
