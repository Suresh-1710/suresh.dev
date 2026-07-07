const SKILLS = [
  { icon: 'fab fa-html5', color: '#e34f26', label: 'HTML5' },
  { icon: 'fab fa-css3-alt', color: '#1572b6', label: 'CSS3' },
  { icon: 'fab fa-js', color: '#f7df1e', label: 'JavaScript' },
  { icon: 'fab fa-python', color: '#3776ab', label: 'Python' },
  { icon: 'fas fa-database', color: '#4479a1', label: 'SQL' },
  { icon: 'fas fa-chart-bar', color: '#f2c811', label: 'Power BI' },
  { icon: 'fas fa-code', color: '#00599c', label: 'C / C++' },
  { icon: 'fab fa-github', color: '#ffffff', label: 'Git & GitHub' },
  {
    icon: 'fas fa-play',
    color: '#ffffff',
    label: 'Vercel',
    style: { transform: 'rotate(-90deg)', display: 'inline-block' },
  },
];

function Skills() {
  return (
    <section id="skills">
      <h2>
        My <span className="gradient-text">Skills</span>
      </h2>
      <div className="skills-grid">
        {SKILLS.map((skill) => (
          <div className="skill-card" key={skill.label}>
            <i className={skill.icon} style={{ color: skill.color, ...skill.style }}></i>
            <span>{skill.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
