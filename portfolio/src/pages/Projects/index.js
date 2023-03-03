import React from 'react';
import Wrapper from "../../components/Wrapper";
import Project from "../../components/Project";
import projects from "../../projects.json";
import myImage from '../../images/portfolio.jpg';
import './style.css';

function Projects() {
  return (
    <div className='projects-bckg'>
      <p className="projects-header">Here are some projects I've worked on so far</p>
      <Wrapper>
      {projects.map(function(project) {
        return <Project
          key={project.id}
          name={project.name}
          image={project.image}
          deployed={project.deployed}
          github={project.github}
        />
      })}
    </Wrapper>
    </div>
  );
}

export default Projects;