/**
 * Header component
 *
 * Top navigation bar for your site. Set to remain visible as the
 * user scrolls so that they can constantly reach any part of your page.
 */
import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId, e) => {
    e.preventDefault();
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`nav-header ${scrolled ? 'scrolled' : ''}`}>
      <nav className="nav-links">
        <a href="#home" onClick={(e) => scrollToSection('home', e)}>Home</a>
        <a href="#about" onClick={(e) => scrollToSection('about', e)}>About</a>
        <a href="#portfolio" onClick={(e) => scrollToSection('portfolio', e)}>Portfolio</a>
      </nav>
    </header>
  );
};

export default Header;
