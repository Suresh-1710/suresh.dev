import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PROJECTS } from '../data/projects';

function ProjectsPage() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;
    const target = document.querySelector(location.hash);
    target?.scrollIntoView({ behavior: 'smooth' });
  }, [location.hash]);

  return (
    <section id="projects-page" className="projects-page">
      <Link to="/" className="back-link">
        <i className="fas fa-arrow-left"></i> Back to Home
      </Link>

      <h2>
        <span className="gradient-text">All Projects</span>
      </h2>

      <div className="projects-stack">
        {PROJECTS.map((project) => (
          <div className="card project-detail-card" id={project.slug} key={project.slug}>
            <h3>{project.title}</h3>
            <p className="card-desc">{project.summary}</p>
            <p className="card-desc">{project.extraDesc}</p>

            {project.meta.map((line) => (
              <p className="card-meta" key={line.label}>
                <strong>{line.label}:</strong> {line.value}
              </p>
            ))}

            <div className="card-actions">
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary"
              >
                View Live Website
              </a>
              {project.repoUrls ? (
                project.repoUrls.map((repo) => (
                  <a
                    key={repo.url}
                    href={repo.url}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-secondary"
                  >
                    {repo.label}
                  </a>
                ))
              ) : (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-secondary"
                >
                  View Source Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsPage;
