import hsrw from "./assets/HSRW.png";
import mjla from "./assets/MJLA.png";
import nt from "./assets/NT.png";
import adr from "./assets/adr_cover.png";

export const strings = {
  en: {
    EXPERIENCE: [
      {
        NO: "1",
        POSITION: "Student Assistant",
        COMPANY: "Hochschule Rhein-Waal, Germany",
        LOGO: hsrw,
        TIME: "Sep 2019 - Feb 2021",
        DETAILS: [
          "Supported the professor in evaluating MATLAB exercise submissions.",
          "Assisted the professor in MATLAB practical training sessions.",
          "Conducted tutorials.",
          "Supported the professor in evaluating C exercise submissions",
        ],
      },
      {
        NO: "2",
        POSITION: "Intern",
        COMPANY: "Nakuru Tanners, Kenya",
        LOGO: nt,
        TIME: "Jan 2018 - Mar 2018",
        DETAILS: [
          "Maintenance and inspection",
          "Operation of machinery",
          "Quality control",
        ],
      },
    ],
    EDUCATION: [
      {
        NO: "1",
        DEGREE: "BSc Mechatronic Systems Engineering",
        SCHOOL: "Hochschule Rhein-Waal, Germany",
        LOGO: hsrw,
        TIME: "2018 - Present",
        DETAILS: ["Average Grade: 1,7", "Transcript"],
      },
      {
        NO: "2",
        DEGREE: "Highschool Diploma",
        SCHOOL: "Melvin Jones Lions Academy, Kenya",
        LOGO: mjla,
        TIME: "2009 - 2016",
        DETAILS: [
          "A Levels (Grade 13-12) Results: 3A*s, 1A (eq. Abitur: 1,0)",
          "IGCSEs (Grade 9-11) Results: 6A*s, 2A",
          "Best in Kenya in A Level Computing",
          "Best in Kenya in AS Level Computing",
          "Best in Kenya in IGCSE Mathematics",
          "Best in Kenya in IGCSE Accounting",
        ],
      },
    ],
    SOFTWARES: [
      { NAME: "SOLIDWORKS", VAL: "10" },
      { NAME: "MATLAB & Simulink", VAL: "10" },
      { NAME: "Simatic STEP 7", VAL: "6" },
      { NAME: "Autodesk EAGLE", VAL: "6" },
      { NAME: "ANSYS Workbench", VAL: "6" },
      { NAME: "Microsoft Office", VAL: "10" },
    ],
    PROGRAMMING: [
      { NAME: "C, C++" },
      { NAME: "Java, Android Development" },
      { NAME: "Python" },
      { NAME: "VB.NET,  VBA for Office" },
      { NAME: "JavaScript, HTML, CSS" },
      { NAME: "ROS" },
    ],
    SKILLS: [
      { NAME: "Embedded System Design" },
      { NAME: "Software Development" },
      { NAME: "Mechanical Design" },
      { NAME: "Intercultural Skills" },
      { NAME: "Leadership" },
      { NAME: "Effective communcation" }
    ],
    PROJECTS: [
      {
        NO:"1",
        TITLE: "Autonomous Delivery Robot",
        COVER: adr,
        PAGE: "",
        TAGS: "",
      },
      {
        NO:"2",
        TITLE: "Automated Sprinkler System",
        COVER: adr,
        PAGE: "",
        TAGS: "",
      },
      {
        NO:"3",
        TITLE: "ABS Controller",
        COVER: adr,
        PAGE: "",
        TAGS: "",
      },
      {
        NO:"4",
        TITLE: "Portfolio Website",
        COVER: adr,
        PAGE: "",
        TAGS: "",
      },
      {
        NO:"5",
        TITLE: "Employee and Membership Management System",
        COVER: adr,
        PAGE: "",
        TAGS: "",
      },
      {
        NO:"6",
        TITLE: "Submission Checker",
        COVER: adr,
        PAGE: "",
        TAGS: "",
      },
    ]
  },
};
