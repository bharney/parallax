import React from 'react';

const Technologies: React.FC = () => (
  <section id="Technologies" className="no-padding-top">
    <div className="container">
      <div className="row">
        <div className="col-lg-12 col-md-12">
          <h2 className="margin-top-0 text-primary wow flipInX text-center">Technology Stack</h2>
          <hr />
          <div className="row justify-content-center technology-grid">
            <div className="col-12 col-md-5 col-lg-4 technology-column">
              <ul>
                <li>AKS</li>
                <li>Azure</li>
                <li>Azure Open AI</li>
                <li>Bootstrap</li>
                <li>Build CI/CD</li>
                <li>C#</li>
                <li>CSS3</li>
                <li>Docker</li>
                <li>Dotnet</li>
                <li>Express</li>
                <li>Git</li>
                <li>GraphQL</li>
              </ul>
            </div>
            <div className="col-12 col-md-5 col-lg-4 technology-column">
              <ul>
                <li>HTML5</li>
                <li>Javascript</li>
                <li>Jest</li>
                <li>MongoDB</li>
                <li>Node</li>
                <li>Playwright</li>
                <li>React</li>
                <li>Redux</li>
                <li>Restful API</li>
                <li>SQL</li>
                <li>TypeScript</li>
                <li>Webpack</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Technologies;
