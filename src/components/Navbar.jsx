import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

const NAV_LINKS = [
  { href: '#home', label: 'Home' },
  { href: '/projects', label: 'Projects', isPage: true },
  { href: '/blog', label: 'Blog', isPage: true },
  { href: '#contact', label: 'Contact' },
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setMenuOpen((open) => !open);

  const handleNavClick = (e, link) => {
    e.preventDefault();
    setMenuOpen(false);

    if (link.isPage) {
      navigate(link.href);
      return;
    }

    if (location.pathname !== '/') {
      navigate('/');
      requestAnimationFrame(() => {
        document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
      });
      return;
    }

    document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleHamburgerKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      toggleMenu();
    }
  };

  return (
    <nav>
      <div className="logo">
        Suresh<span className="dot">.</span>dev
      </div>

      <div
        className="hamburger"
        onClick={toggleMenu}
        onKeyDown={handleHamburgerKeyDown}
        role="button"
        tabIndex={0}
        aria-label="Toggle navigation menu"
        aria-expanded={menuOpen}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      <div className={`nav-links${menuOpen ? ' active' : ''}`}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} onClick={(e) => handleNavClick(e, link)}>
            {link.label}
          </a>
        ))}

        <button
          type="button"
          className="theme-toggle"
          onClick={toggleTheme}
          aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
          aria-pressed={theme === 'light'}
        >
          <i className={theme === 'dark' ? 'fas fa-moon' : 'fas fa-sun'}></i>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
