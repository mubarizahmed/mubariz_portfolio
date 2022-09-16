import React from "react";
import { strings } from "../../string";
import "./projects.css";

const Projects = (props) => {
  const projects = strings[props.language].PROJECTS;

  return (
    <div id="projects" className="mp__projects section__padding">
      <h1 className="section__head-text">Projects</h1>
      <div className="mp__projects-content">
        {projects.map((project) => (
          <>
            <article className="mp__project mp__projects-text">
              <div className="mp__project-cover">
                <img src={project.COVER} alt={project.TITLE} />
              </div>
              <div className="mp__project-overlay">
                <div class="mp__project-header">
                  <svg class="mp__project-arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <div class="mp__project-header-text">
                    <h3 class="mp__project-title">{project.TITLE}</h3>
                  </div>
                </div>
								<div class="mp__project-description">
                  <span class="mp__project-status">1 hour ago</span>
									<button class="btn btn-1 hover-filled-slide-down">
                    Read
                  </button>
									<button class="btn btn-1 hover-filled-slide-down">
                    Code
                  </button>
								</div>
              </div>
            </article>
          </>
        ))}
      </div>
    </div>
  );
};

export default Projects;
