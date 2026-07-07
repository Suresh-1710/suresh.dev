import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';
import { PROJECTS } from '../data/projects';

const HOME_PROJECT_COUNT = 3;

function Projects() {
  const featuredProjects = PROJECTS.slice(0, HOME_PROJECT_COUNT);

  return (
    <section id="projects">
      <h2>
        <span className="gradient-text">Projects</span>
      </h2>

      <div className="projects-stack">
        {featuredProjects.map((project) => (
          <ProjectCard key={project.slug} {...project} />
        ))}
      </div>

      <div className="view-all-wrap">
        <Link to="/projects" className="btn btn-primary">
          View All Projects
        </Link>
      </div>
    </section>
  );
}

export default Projects;
