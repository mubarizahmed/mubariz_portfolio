import React, { useState } from "react";
import { strings } from "../../string";
import "./competencies.css";

const Competencies = (props) => {
  const softwares = strings[props.language].SOFTWARES;
  const programming = strings[props.language].PROGRAMMING;
  const skills = strings[props.language].SKILLS;

  return (
    <div id="competencies" className="mp__competencies section__padding">
      <h1 className="section__head-text">Competencies</h1>
      <div className="mp__competencies-content">
        <div className="mp__competencies-softwares mp__competencies-text">
          <h2>Softwares</h2>
          {softwares.map((software) => (
            <>
              <div className="mp__competencies-software">
                <text>{software.NAME}</text>
                <progress
                  className="mp__competencies-software-progress"
                  value={software.VAL}
                  max="10"
                />
              </div>
            </>
          ))}
        </div>
        <div className="mp__competencies-programming mp__competencies-text">
          <h2>Programming</h2>
          {programming.map((prog) => (
            <>
              <li>{prog.NAME}</li>
            </>
          ))}
        </div>
        <div className="mp__competencies-skills mp__competencies-text">
          <h2>Skills</h2>
          {skills.map((skill) => (
            <>
              <li>{skill.NAME}</li>
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Competencies;
