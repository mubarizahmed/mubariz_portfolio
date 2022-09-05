import React from "react";
import { strings } from "../../string";
import { Collapsible } from "../../components";
import "./education.css";

const Education = (props) => {
  const educations = strings[props.language].EDUCATION;
  return (
    <div id="education" className="mp__education section__padding">
      <h1 className="section__head-text">Education</h1>

      {educations.map((education) => (
        <>
          <div className="mp__education-content">
            <div className="mp__education-logo">
              <img src={education.LOGO} alt="logo" />
            </div>
            <ellipse className="mp__education-ellipse"></ellipse>
            <div className="mp__education-text">
              <Collapsible
                label1={education.DEGREE}
                label2={education.SCHOOL}
                label3={education.TIME}
              >
                <ul className="mp__education-text_details">
                  {education.DETAILS.map((detail) => (
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

export default Education;
