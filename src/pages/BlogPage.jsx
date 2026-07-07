import { Link } from 'react-router-dom';

const HASHTAGS = [
  'ArtificialIntelligence',
  'ComputerScience',
  'StudentAchievement',
  'AI',
  'TechPresentation',
  'LearningJourney',
  'FutureOfTech',
  'RamakrishnaMissionVivekanandaCollege',
  'BScCS',
];

function BlogPage() {
  return (
    <section id="blog-page" className="projects-page">
      <Link to="/" className="back-link">
        <i className="fas fa-arrow-left"></i> Back to Home
      </Link>

      <h2>
        <span className="gradient-text">Blog</span>
      </h2>

      <article className="card blog-post">
        <span className="date">🎉 Proud Moment from My First Year Journey!</span>
        <h3>3rd Prize — AI Paper Presentation</h3>

        <p className="card-desc">
          During my first year of B.Sc. Computer Science at Ramakrishna Mission Vivekananda
          College, Chennai, our department conducted a PPT presentation competition where
          students from 1st, 2nd &amp; 3rd year across the college participated.
        </p>
        <p className="card-desc">
          I presented on Artificial Intelligence and its real-time applications &amp; future
          possibilities — a topic that inspired me to explore deeper into the world of
          technology. 🤖✨
        </p>
        <p className="card-desc">
          I'm very happy to share that I secured 3rd Prize overall in the college! 🏆 This moment
          gave me confidence and motivated me to keep learning, building and improving myself in
          the tech field. 🚀
        </p>

        <div className="blog-photos">
          <img
            src="/blog/ai-presentation-group.jpg"
            alt="Group photo on stage with faculty and participants at the AI paper presentation event"
            className="blog-photo-main"
          />
          <div className="blog-photo-side">
            <img
              src="/blog/ai-presentation-1.jpg"
              alt="Suresh presenting on stage with a slide about the 1994 world checkers champion"
            />
            <img
              src="/blog/ai-presentation-2.jpg"
              alt="Suresh presenting on stage with a slide titled Artificial Intelligence"
            />
          </div>
        </div>

        <div className="blog-tags">
          {HASHTAGS.map((tag) => (
            <span key={tag}>#{tag}</span>
          ))}
        </div>
      </article>
    </section>
  );
}

export default BlogPage;
