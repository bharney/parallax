import React, { useState } from 'react';

interface HexagonProjectProps {
  href: string;
  className: string;
  label: string;
}

const HexagonProject: React.FC<HexagonProjectProps> = ({ href, className, label }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className={`hexagon ${className}${hovered ? ' hovered' : ''}`}>
        <div className="hexTop"></div>
        <div className="hexBottom"></div>
        {hovered && (
          <div className="projectText text-center">
            <h2><strong>{label.toUpperCase()}</strong></h2>
            <p>Learn more about this project</p>
          </div>
        )}
      </div>
    </a>
  );
};

const Portfolio: React.FC = () => (
  <section id="Portfolio">
    <div className="container">
      <div className="portfolio-hex-grid">
        <div className="portfolio-hex-row portfolio-hex-row--top">
          <div className="portfolio-hex-item">
            <HexagonProject href="https://www.chicagoinabox.com/" className="project1" label="Chicago In A Box" />
          </div>
          <div className="portfolio-hex-item">
            <HexagonProject href="http://bharney.com/" className="project2" label="Meet Brian" />
          </div>
          <div className="portfolio-hex-item">
            <HexagonProject href="http://www.JMSAutoRepair.com/" className="project3" label="JMS Auto" />
          </div>
        </div>
        <div className="portfolio-hex-row portfolio-hex-row--bottom">
          <div className="portfolio-hex-item portfolio-hex-item--shift-right">
            <HexagonProject href="http://www.colettemills.com/" className="project4" label="Artist Colette Mills" />
          </div>
          <div className="portfolio-hex-item portfolio-hex-item--shift-left">
            <HexagonProject href="http://gosurfer.bharney.com/" className="project5" label="Go-Surfer" />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Portfolio;
