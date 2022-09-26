import React, { useEffect, useState } from "react";
import { createClient } from "contentful";
import "./projects.css";
import { Card } from "../../components";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [toggleState, setToggleState] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  const [filterTags, setFilterTags] = useState([]);
  const [viewData, setViewData] = useState([]);

  const client = createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  });

  useEffect(() => {
    const getInfo = async () => {
      try {
        await client.getEntries({ content_type: "project" }).then((entries) => {
          console.log(entries);
          setProjects([
            entries.items.filter((x) => x.fields.category === "Engineering"),
            entries.items.filter((x) => x.fields.category === "Software"),
            entries.items.filter((x) => x.fields.category === "Design"),
            entries.items,
          ]);
          console.log(projects);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getInfo();
  }, []);

  useEffect(() => {
    const updateCurrentData = () => {
      setCurrentData(projects.at(toggleState - 1));
    };
    if (projects) {
      console.log(projects);
      updateCurrentData();
    }
  }, [toggleState, projects]);

  useEffect(() => {
    const updateFilterTags = () => {
      const tags = [];
      const tagsEnabled = [];
      console.log(currentData);
      currentData.forEach(function (value) {
        console.log(value);
        value.fields.tags.forEach(function (t) {
          if (tags.indexOf(t) === -1) {
            tags.push(t);
            tagsEnabled.push({ name: t, enabled: true });
          }
        });
      });
      console.log(tagsEnabled);
      setFilterTags(tagsEnabled);
      console.log(filterTags)
    };
    if (currentData) {
      updateFilterTags();
    }
  }, [currentData]);

  useEffect(() => {
    const updateViewData = () => {
      setViewData(
        currentData.filter( (i) => {
          for (const tag of i.fields.tags){
            console.log(filterTags);
            const index = filterTags.findIndex(x => x.name === tag);
            console.log(index);
            if (!(index === -1) && filterTags[index].enabled){
              return true;
            }
          }
          return false;
        })
      )
    }
    if(currentData && filterTags){
      updateViewData();
      console.log(viewData);
    }
  }, [currentData, filterTags]);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  const toggleFilter = (name) => {
    console.log(name);
    try {
      const newFilterTags = [...filterTags];
      const index = newFilterTags.findIndex((obj) => obj.name === name);
      newFilterTags[index].enabled = !newFilterTags[index].enabled;
      console.log(newFilterTags[index].enabled);
      setFilterTags(newFilterTags);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(filterTags);

  return (
    <div className="projects">
      <div className="tab-block">
        <div
          className={
            toggleState === 1
              ? "tabs tab-active tab-1-active"
              : "tabs tab-1-inactive"
          }
          onClick={() => toggleTab(1)}
        >
          Engineering
        </div>
        <div
          className={
            toggleState === 2
              ? "tabs tab-active tab-2-active"
              : "tabs tab-2-inactive"
          }
          onClick={() => toggleTab(2)}
        >
          Software
        </div>
        <div
          className={
            toggleState === 3
              ? "tabs tab-active tab-3-active"
              : "tabs tab-3-inactive"
          }
          onClick={() => toggleTab(3)}
        >
          Design
        </div>
        <div
          className={
            toggleState === 4
              ? "tabs tab-active tab-4-active"
              : "tabs tab-4-inactive"
          }
          onClick={() => toggleTab(4)}
        >
          All
        </div>
      </div>
      <hr className={`divider-solid divider-${toggleState}`} />
      <div className="tag-selector">
        {filterTags.map((item) => (
          <div
            className="tag"
            key={item.name}
            onClick={() => toggleFilter(item.name)}
          >
            {item.enabled?<span>&#10005;</span>:null}
            {item.name}
          </div>
        ))}
      </div>
      <div className="content">
        {viewData &&
          viewData.map((project) => (
            <>
              <Card
                id={project?.sys?.id}
                title={project?.fields?.title}
                cover={project?.fields?.cover?.fields?.file?.url}
                details={project?.fields?.tags}
              ></Card>
            </>
          ))}
      </div>
    </div>
  );
};

export default Projects;
