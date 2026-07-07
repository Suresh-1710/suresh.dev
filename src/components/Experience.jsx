const TIMELINE = [
  {
    tag: 'June 2026 - Present',
    title: 'Software Engineering Intern',
    org: 'EdZola Technologies, Coimbatore, TN',
    bullets: [
      'Building web/application features using JavaScript, HTML, and CSS.',
      'Working with MySQL to configure and query data for internal reporting.',
      'Supporting a live engineering team at a technology-for-social-impact company.',
    ],
  },
  {
    tag: 'March 2026 - April 2026',
    title: 'Web Development Intern',
    org: 'Prodigy InfoTech',
    bullets: [
      'Sharpened front-end skills by building interactive components and UI designs.',
      'Gained hands-on experience building tools focused on user interaction and real-time logic.',
      'Applied best practices for creating responsive and accessible digital experiences.',
    ],
  },
  {
    tag: 'June 2025 - July 2025',
    title: 'Technical Intern',
    org: 'CI Global Technologies (P) Ltd',
    bullets: [
      'Utilized Python for data processing and scripting tasks.',
      'Created interactive dashboards using Power BI to visualize trends.',
      'Gained hands-on experience in a professional corporate environment.',
    ],
  },
  {
    tag: 'Currently Pursuing (3rd Year)',
    title: 'B.Sc. Computer Science',
    org: 'Ramakrishna Mission Vivekananda College',
    note: 'Building a strong foundation in programming, data structures, and algorithms.',
  },
];

const CERTIFICATIONS = [
  {
    title: '🥉 3rd Prize - Paper Presentation',
    date: 'College-Level Competition | 1st Year',
    body: (
      <>
        Competed against students from all departments and won 3rd prize overall.
        <br />
        <br />
        <strong>Topic:</strong> Artificial Intelligence & Generative AI.
        <br />
        Presented on the future of AI models and their impact on technology.
      </>
    ),
  },
  {
    title: 'Honours Diploma in Computer Application',
    date: 'NCVTE | Certified',
    body: 'Specialized training in computer applications and software tools.',
  },
  {
    title: 'AI for All & AI in MSME',
    date: 'One-Day Seminar | Ramakrishna Mission Vivekananda College (Evening College) | March 2026',
    body: 'Attended a seminar on the practical applications of Artificial Intelligence for businesses and MSMEs.',
  },
];

function Experience() {
  return (
    <section id="experience">
      <h2>
        Journey <span className="gradient-text">& Experience</span>
      </h2>

      <div className="timeline">
        {TIMELINE.map((item) => (
          <div className="timeline-item" key={item.title}>
            <div className="timeline-dot"></div>
            <div className="timeline-card">
              <span className="timeline-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <span className="timeline-org">{item.org}</span>
              {item.bullets ? (
                <ul>
                  {item.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              ) : (
                <p className="timeline-note">{item.note}</p>
              )}
            </div>
          </div>
        ))}
      </div>

      <h3 className="cert-heading">Certifications</h3>
      <div className="cert-grid">
        {CERTIFICATIONS.map((cert) => (
          <div className="card cert-card" key={cert.title}>
            <h3>{cert.title}</h3>
            <span className="date">{cert.date}</span>
            <p className="card-meta">{cert.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
