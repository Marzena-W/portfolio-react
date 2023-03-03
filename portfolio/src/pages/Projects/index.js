import React from 'react';
import Wrapper from "../../components/Wrapper";
import Project from "../../components/Project";
import projects from "../../projects.json";
import './style.css';

function Projects() {
  return (
    <Wrapper>
      <Project
        name={projects[0].name}
        image={projects[0].image}
        deployed={projects[0].deployed}
        github={projects[0].github}
      />
      <Project
        name={projects[1].name}
        image={projects[1].image}
        deployed={projects[1].deployed}
        github={projects[1].github}
      />
      <Project
        name={projects[2].name}
        image={projects[2].image}
        deployed={projects[2].deployed}
        github={projects[2].github}
      />
       <Project
        name={projects[3].name}
        image={projects[3].image}
        deployed={projects[3].deployed}
        github={projects[3].github}
      />
      <Project
        name={projects[4].name}
        image={projects[4].image}
        deployed={projects[4].deployed}
        github={projects[4].github}
      />
      <Project
        name={projects[5].name}
        image={projects[5].image}
        deployed={projects[5].deployed}
        github={projects[5].github}
      />
    </Wrapper>
  );
}

export default Projects;