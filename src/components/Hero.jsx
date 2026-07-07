import { useEffect, useState } from 'react';

const ROLE = 'Software Engineer';
const TYPING_SPEED = 100;

function Hero() {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let charIndex = 0;
    let timeoutId;

    function typeWriter() {
      if (charIndex < ROLE.length) {
        charIndex++;
        setTypedText(ROLE.substring(0, charIndex));
        timeoutId = setTimeout(typeWriter, TYPING_SPEED);
      }
    }

    typeWriter();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <header className="hero" id="home">
      <div className="hero-text">
        <p className="hero-greeting">Hello, I am</p>
        <h1>
          Suresh
          <br />
          <span className="gradient-text">Narasimhan</span>
        </h1>
        <p className="hero-role">
          Aspiring <strong id="typing-text">{typedText}</strong>
        </p>
        <p className="hero-desc">
          A 3rd-year Computer Science student blending front-end web development with back-end
          data analytics to build clean, efficient, and data-driven solutions.
        </p>
        <div className="hero-actions">
          <a href="#about" className="btn btn-primary">
            Discover More
          </a>
          <a href="/Suresh_Narasimhan_Resume.pdf" download className="btn btn-secondary">
            Download CV
          </a>
        </div>
      </div>
      <div className="hero-photo">
        <div className="profile-frame">
          <img src="/profile.jpeg" alt="Suresh Narasimhan" className="profile-img" />
        </div>
      </div>
    </header>
  );
}

export default Hero;
