import React, { useState } from "react";
import "./Navbar.css"; 

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="container nav-container">
        <div className="logo mono">Ayush.</div>
        <div className={`nav-links ${isMenuOpen ? "active" : ""}`}>
          <a href="#about" onClick={() => setIsMenuOpen(false)}>About</a>
          <a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a>
          <a href="#projects" onClick={() => setIsMenuOpen(false)}>Work</a>
          <a href="#experience" onClick={() => setIsMenuOpen(false)}>Experience</a>
          <a href="#contact" onClick={() => setIsMenuOpen(false)} className="btn-primary" style={{padding: '8px 16px', fontSize: '0.8rem'}}>Contact</a>
        </div>
        <div className={`hamburger ${isMenuOpen ? "open" : ""}`} onClick={handleMenuToggle}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
