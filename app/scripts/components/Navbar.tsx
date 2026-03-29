import React, { useState, useEffect } from 'react';

interface NavbarProps {
  onContactClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onContactClick }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroShell = document.getElementById('hero-shell');
      const nav = document.getElementById('nav');
      if (!heroShell || !nav) {
        setScrolled(window.scrollY > 100);
        return;
      }

      const threshold = heroShell.offsetHeight - nav.offsetHeight;
      setScrolled(window.scrollY >= threshold);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div id="nav" className={scrolled ? 'affix' : ''}>
      <div id="custom-nav" className={`navbar navbar-expand-lg ${scrolled ? 'navbar-light bg-white' : 'navbar-dark'}`}>
        <div className="container-fluid">
          <a className="navbar-brand page-scroll" href="#Home">
            Brian Harney
          </a>
          <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#js-navbar-collapse">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse collapse" id="js-navbar-collapse">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item"><a className="nav-link page-scroll" href="#Portfolio">PORTFOLIO</a></li>
              <li className="nav-item"><a className="nav-link page-scroll" href="#Technologies">TECHNOLOGIES</a></li>
              <li className="nav-item"><a className="nav-link page-scroll" href="https://twitter.com/bharney0">FEED</a></li>
              <li className="nav-item"><a className="nav-link page-scroll" href="#About">ABOUT</a></li>
              <li className="nav-item">
                <a
                  className="nav-link page-scroll"
                  title="Contact Brian Harney. Feel free to get in touch for any projects, contract work, and or just a friendly hello!"
                  onClick={onContactClick}
                  style={{ cursor: 'pointer' }}
                >
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
