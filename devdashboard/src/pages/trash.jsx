import { otherProjects } from "../data/projects";
import './trash.css'

export function Trash({ isTrash, toggleTrash }) {
  const trashProjects = otherProjects.filter((project) =>
    isTrash.includes(project.id),
  );
  return (
    <section className="trash-page">
      <div className="trash-header">
        <div>
          <span className="trash-kicker">Deleted Projects</span>
          <h1>Deleted Projects</h1>
        </div>
        <span className="trash-count">{trashProjects.length} deleted</span>
      </div>

      {trashProjects.length === 0 ? (
        <div className="trash-empty-state">
          <h2>No deleted projects yet.</h2>
          <p>Deleted projects are only available for 30 days.</p>
        </div>
      ) : (
        <div className="trash-grid">
          {trashProjects.map((project) => (
            <article className="trash-card" key={project.id}>
              <img src={project.image} alt={project.title} />

              <div className="trash-card-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <p className="trash-stack">
                  <strong>Stack:</strong> {project.stack}
                </p>

                <button
                  className="restore-button"
                  onClick={() => toggleTrash(project.id)}
                >
                  Restore
                </button>
              </div>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}
