import { React, useEffect, useState } from "react";
import "./info.css";
import Typewriter from "typewriter-effect";
import { createClient } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import DOMPurify from "dompurify";
import { Collapsible } from "../../components";

const Info = () => {
  const [loaded, setLoaded] = useState(false);
  const [summary, setSummary] = useState([]);
  const [experience, setExperience] = useState([]);
  const [education, setEducation] = useState([]);

  const client = createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  });

  useEffect(() => {
    const getInfo = async () => {
      try {
        await client.getEntries({ content_type: "info" }).then((entries) => {
          console.log(entries.items[0].fields.summary);
          setSummary(entries.items[0].fields.summary);
        });
        await client
          .getEntries({ content_type: "experience", order:"fields.id" })
          .then((entries) => {
            console.log(entries.items);
            setExperience(entries.items);
          });
        await client
          .getEntries({ content_type: "education", order:"fields.id"  })
          .then((entries) => {
            console.log(entries);
            setEducation(entries.items);
          });
      } catch (error) {
        console.log(error);
      }
    };
    getInfo();
  }, []);

  return (
    <div className="info">
      <section className="hero">
        <div className="hero-text">
          <h1>
            <div id="typewriter2"></div>
            <Typewriter
              onInit={(typewriter) => {
                typewriter
                  .callFunction(() => {
                    setLoaded(false);
                  })
                  .typeString("Hello, there!")
                  .pauseFor(1000)
                  .typeString("<br>My name is Mubariz Ahmed")
                  .changeCursor(" ")
                  .start();
              }}
            />
            <div className="hero-text-variable">
              <Typewriter
                options={{
                  autoStart: false,
                  cursor: " ",
                }}
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(7000)
                    .changeCursor("|")
                    .typeString("I am a ")
                    .callFunction(() => {
                      setLoaded(true);
                    })
                    .changeCursor(" ")
                    .start();
                }}
              />

              {loaded && (
                <Typewriter
                  options={{
                    autoStart: false,
                    loop: true,
                    cursor: " ",
                  }}
                  onInit={(typewriter) => {
                    typewriter
                      .changeCursor("|")
                      .typeString(
                        "<span style='color: var(--color-1);'> Mechatronics Engineer</span>"
                      )
                      .pauseFor(1000)
                      .deleteChars(21)
                      .typeString(
                        "<span style='color: var(--color-2);'> Developer</span>"
                      )
                      .pauseFor(1000)
                      .deleteChars(9)
                      .typeString(
                        "<span style='color: var(--color-3);'> Graphics Designer</span>"
                      )
                      .pauseFor(1000)
                      .deleteChars(17)
                      .start();
                  }}
                />
              )}
            </div>
          </h1>
        </div>
      </section>
      <section className="summary">
        <hr class="solid" />
        <div className="layout">
          <div className="title">
            <p>01</p>
            <h2>Summary</h2>
          </div>
          <div
            className="details"
            dangerouslySetInnerHTML={{
              __html: DOMPurify.sanitize(documentToHtmlString(summary)),
            }}
          ></div>
        </div>
      </section>
      <section className="experience">
        <hr class="solid" />
        <div className="layout">
          <div className="title">
            <p>02</p>
            <h2>Experience</h2>
          </div>
          <div className="details">
            {experience.map((item) => (
              <>
                <div className="item">
                  <div className="item-logo">
                    <img src={item.fields.logo.fields.file.url} alt={item.fields.logo.fields.title} />
                  </div>
                  <ellipsis className="item-ellipse" />
                  <div className="item-text">
                  <Collapsible
                    label1={item.fields.position}
                    label2={item.fields.company}
                    label3={item.fields.time}
                  >
                    <div className="item-collapsible"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          documentToHtmlString(item.fields.details)
                        ),
                      }}
                    ></div>
                  </Collapsible>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
      <section className="education">
        <hr class="solid" />
        <div className="layout">
          <div className="title">
            <p>03</p>
            <h2>Education</h2>
          </div>
          <div className="details">
            {education.map((item) => (
              <>
                <div className="item">
                  <div className="item-logo">
                    <img src={item.fields.logo.fields.file.url} alt={item.fields.logo.fields.title} />
                  </div>
                  <ellipsis className="item-ellipse" />
                  <div className="item-text">
                  <Collapsible
                    label1={item.fields.degree}
                    label2={item.fields.school}
                    label3={item.fields.time}
                  >
                    <div className="item-collapsible"
                      dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(
                          documentToHtmlString(item.fields.details)
                        ),
                      }}
                    ></div>
                  </Collapsible>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Info;
