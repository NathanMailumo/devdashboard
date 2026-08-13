import "./homepage.css";
import heroImage from "../assets/hero.png";

export function HomePage() {
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
  ];

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
          {otherProjects.map((project) => (
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
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
