import React from 'react';

interface ParallaxHeaderProps {
  onContactClick: () => void;
}

const ParallaxHeader: React.FC<ParallaxHeaderProps> = ({ onContactClick }) => (
  <header id="Home">
    <div className="parallax-container">
      <div className="parallax-layer layer-0" data-parallax-speed="0.05"></div>
      <div className="parallax-layer layer-1" data-parallax-speed="0.05"></div>
      <div className="parallax-layer layer-2" data-parallax-speed="0.05"></div>
      <div className="parallax-layer layer-3" data-parallax-speed="0.07"></div>
      <div className="parallax-layer layer-4" data-parallax-speed="0.1"></div>
      <div className="parallax-layer layer-5" data-parallax-speed="0.2"></div>
      <div className="parallax-layer layer-6" data-parallax-speed="0.3"></div>
      <div className="parallax-layer layer-7" data-parallax-speed="0.4"></div>
      <div className="parallax-layer layer-8" data-parallax-speed="0.5"></div>
      <div className="parallax-layer layer-9" data-parallax-speed="0.6"></div>
      <div className="parallax-layer cover" data-parallax-speed="0.6"></div>
    </div>
    <div className="header-content clearfix section">
      <nav id="header-nav" className="d-flex justify-content-center align-items-center flex-wrap">
        <p className="text-left navline">
          <a className="page-scroll" href="#Home">Home</a>
        </p>
        <p className="text-left navline">
          <a className="page-scroll" href="#Portfolio">Work</a>
        </p>
        <p className="text-left navline">
          <a className="page-scroll" href="#Technologies">Tech</a>
        </p>
        <p className="logo">
          <a href="#Home"><img src="../images/logoG.png" alt="Built by Brian Harney - Black Bear Design" /></a>
        </p>
        <p className="text-right navline">
          <a className="page-scroll" href="https://twitter.com/bharney0">Feed</a>
        </p>
        <p className="text-right navline">
          <a className="page-scroll" href="#About">About</a>
        </p>
        <p className="text-right navline">
          <a
            title="Contact Brian Harney. Feel free to get in touch for any projects, contract work, and or just a friendly hello!"
            onClick={onContactClick}
            className="page-scroll"
            style={{ cursor: 'pointer' }}
          >
            Contact
          </a>
        </p>
      </nav>
      <div id="heroText" className="inner backdrop">
        <div className="row">
          <div className="col-lg-12">
            <div className="col-lg-push-3">
              <h1 className="cursive wow fadeInLeftBig">Brian Harney</h1>
              <h2><strong>Software Engineer</strong></h2>
            </div>
          </div>
        </div>
        <hr style={{ margin: '0 auto' }} />
      </div>
    </div>
  </header>
);

export default ParallaxHeader;
