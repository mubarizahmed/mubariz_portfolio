import React, { useState } from "react";
import { strings } from "../../string";
import { Collapsible } from "../../components";
import "./experience.css";

const Experience = (props) => {
  const experiences = strings[props.language].EXPERIENCE;
  //console.log(strings[props.language]);
  //const [experiences, setExperiences] = useState([]);
  //setExperiences(_strings);

  return (
    <div id="experience" className="mp__experience section__padding">
      <h1 className="section__head-text">Work Experience</h1>

      {experiences.map((experience) => (
        <>
          <div className="mp__experience-content">
            <div className="mp__experience-logo">
              <img src={experience.LOGO} alt="logo" />
            </div>
            <ellipse
              /* id={"ellipse-"&&experience.NO} */ className="mp__experience-ellipse"
            ></ellipse>
            <div className="mp__experience-text">
              <Collapsible
                label1={experience.POSITION}
                label2={experience.COMPANY}
                label3={experience.TIME}
              >
                <ul className="mp__experience-text_details">
                  {experience.DETAILS.map((detail) => (
                    <li>{detail}</li>
                  ))}
                </ul>
              </Collapsible>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default Experience;
