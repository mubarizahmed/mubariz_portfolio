import React from "react";
import { strings } from "../../string";
import { Card } from "../../components";
import "./projects.css";

const Projects = (props) => {
  const projects = strings[props.language].PROJECTS;

  return (
    <div id="projects" className="mp__projects section__padding">
      <h1 className="section__head-text">Projects</h1>
      <div className="mp__projects-content mp__projects-text">
        {projects.map((project) => (
          <>
            <Card title={project.TITLE} cover={project.COVER} details={project.PAGE}></Card>
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
