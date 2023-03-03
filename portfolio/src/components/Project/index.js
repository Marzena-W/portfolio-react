import React from 'react';
import './style.css';

function Project(props) {
  const image = require(`../../images/${props.image}`)
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.title} src={image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Project title:</strong> {props.title}
          </li>
          <li>
            <strong>Deployed application:</strong> {props.deployed}
          </li>
          <li>
            <strong>GitHub repository:</strong> {props.github}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;