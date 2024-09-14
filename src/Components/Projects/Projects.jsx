import React from 'react';
import './Projects.css';
import { assets } from '../../assets/assets';

const Projects = () => {
  const projects = [
    {
      id: 1,
      imgSrc: assets.RB,
      title: 'RECIPE BOOK',
      githubLink: 'https://github.com/',
      liveDemoLink: 'https://github.com/',
    },
    {
      id: 2,
      imgSrc: assets.MM,
      title: 'MATCH MAREL',
      githubLink: 'https://github.com/',
      liveDemoLink: 'https://github.com/',
    },
    {
      id: 3,
      imgSrc: assets.HHS,
      title: 'HOUSE SERVICES',
      githubLink: 'https://github.com/',
      liveDemoLink: 'https://github.com/',
    },
  ];

  return (
    <div className="project" id='project'>
      <div className="project-container">
        <p className="pt-p">Browse My Recent</p>
        <h1 className="pt-h1">Projects</h1>
        <div className="project-details-container">
          {projects.map((project) => (
            <div key={project.id} className="details-containersss">
              <div className="article-container">
                <img
                  src={project.imgSrc}
                  alt={`${project.title} project`}
                  className="project-img"
                />
                <h2 className="project-title">{project.title}</h2>
                <div className="btn-container">
                  <button
                    className="pt-btn"
                    onClick={() => window.location.href = project.githubLink}
                  >
                    Github
                  </button>
                  <button
                    className="pt-btn"
                    onClick={() => window.location.href = project.liveDemoLink}
                  >
                    Live Demo
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
