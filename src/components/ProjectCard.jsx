import { useState } from 'react';
import { Link } from 'react-router-dom';

function ProjectCard({ slug, title, summary, liveUrl, repoUrl, repoUrls, extraDesc, meta }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`card project-card${open ? ' open' : ''}`}>
      <div className="project-toggle">
        <h3>
          <Link to={`/projects#${slug}`} className="project-title-link">
            {title}
          </Link>
        </h3>
        <button
          className="toggle-icon-btn"
          type="button"
          aria-expanded={open}
          aria-label={`${open ? 'Collapse' : 'Expand'} ${title} details`}
          onClick={() => setOpen((v) => !v)}
        >
          <i className="fas fa-chevron-down toggle-icon"></i>
        </button>
      </div>

      <p className="card-desc">{summary}</p>

      <div className="project-body">
        <p className="card-desc">{extraDesc}</p>
        {meta.map((line) => (
          <p className="card-meta" key={line.label}>
            <strong>{line.label}:</strong> {line.value}
          </p>
        ))}
      </div>

      <div className="card-actions">
        <a href={liveUrl} target="_blank" rel="noreferrer" className="btn btn-primary">
          View Live Website
        </a>
        {repoUrls ? (
          repoUrls.map((repo) => (
            <a key={repo.url} href={repo.url} target="_blank" rel="noreferrer" className="btn btn-secondary">
              {repo.label}
            </a>
          ))
        ) : (
          <a href={repoUrl} target="_blank" rel="noreferrer" className="btn btn-secondary">
            View Source Code
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;
