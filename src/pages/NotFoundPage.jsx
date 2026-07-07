import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="projects-page not-found-page">
      <h2>
        404 — Page <span className="gradient-text">Not Found</span>
      </h2>
      <p className="card-desc not-found-text">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Back to Home
      </Link>
    </section>
  );
}

export default NotFoundPage;
