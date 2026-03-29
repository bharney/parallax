import React from 'react';

const About: React.FC = () => (
  <section id="About">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12 text-center">
          <h2 className="margin-top-0 text-primary wow flipInX">About</h2>
          <hr />
          <article className="about-article">
            <p>I'm a software engineer, and I'm good at it.</p>
            <p>I'm a full stack software engineer with over 15 years of experience building web applications. 
               I'm passionate about learning new technologies and applying them to solve real-world problems. 
               I'm a strong advocate for clean code, best practices, and continuous learning. 
               I'm a team player who enjoys collaborating with others to achieve common goals.</p>
          </article>
        </div>
        <div className="col-lg-12 col-xs-12 text-center">
          <div id="map-outer" className="col-xs-12 col-lg-12">
            <div id="googleMap"></div>
            <div className="col-xs-4"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
