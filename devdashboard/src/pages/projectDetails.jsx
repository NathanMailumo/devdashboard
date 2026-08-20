import { NavBar } from "../components/navbar";
import { otherProjects } from "../data/projects";
import { useParams } from "react-router-dom";
import './projectDetails.css'

export function ProjectDetails() {
  const { id } = useParams();

  const project = otherProjects.find((p) => String(p.id) === String(id));

  if (!project) {
    return <div>Project not found</div>;
  }
  return (
    <>
      <NavBar />
      <section className="project-details-page">
        <div className="projects-details-header">
          <h1>{project.title}</h1>
          <span className="projects-detail-status">{project.status}</span>
          <div className="projects-details-image">
            <img src={project.image} />
          </div>
        </div>

        <div className="projects-details-grid">
          <div className="projects-details-desc">
            <h3>Projects Description</h3>
            <p>{project.description}</p>
          </div>

          <div className="projects-details-metadata">

            <div className="status-metadata">
              <h4>Status</h4>
              <span>{project.status}</span>
            </div>

            <div className="creation-metadata">
              <h4>Date Created</h4>
              <span>{project.created}</span>
            </div>

            <div className="end-metadata">
              <h4>Date Finished</h4>
              <span>{project.finished}</span>
            </div>

            <div className="stack-metadata">
              <h4>Stack</h4>
              <span>{project.stack}</span>
            </div>

          </div>
          <div className="project-details-button">
            <button className="edit-button">Edit</button>
            <button className="trash-button">Move to Trash</button>
          </div>

        </div>
      </section>
    </>
  );
}
