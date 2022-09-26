import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { createClient } from "contentful";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import DOMPurify from "dompurify";
import "./projectDetails.css";

const ProjectDetails = () => {
  const { id } = useParams();
  const [content, setContent] = useState([]);
  console.log(id);

  const client = createClient({
    space: process.env.REACT_APP_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  });

  useEffect(() => {
    const getInfo = async () => {
      try {
        await client.getEntry(id).then((entries) => {
          setContent(entries);
        });
      } catch (error) {
        console.log(error);
      }
    };
    getInfo();
  }, []);

  console.log(content);

  const renderOptions = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { title, description, file } = node.data.target.fields;
        const mimeType = file.contentType;
        const mimeGroup = mimeType.split("/")[0];

        switch (mimeGroup) {
          case "image":
            return (
              <img
                title={title ? title : null}
                alt={description ? description : null}
                src={file.url}
              />
            );
          case "application":
            return (
              <a alt={description ? description : null} href={file.url}>
                {title ? title : file.details.fileName}
              </a>
            );
          default:
            return (
              <span style={{ backgroundColor: "red", color: "white" }}>
                {" "}
                {mimeType} embedded asset{" "}
              </span>
            );
        }
      },
    },
  };

  return (
    <div className="blog">
      <div className="blog-hero">
        <div className="blog-hero-left">
          <div className="blog-hero-category">{content?.fields?.category}</div>
          <div className="blog-hero-title">{content?.fields?.title}</div>
          <div className="blog-hero-tags">
            {content?.fields?.tags.map((item) => (
              <div className="tag">{item}</div>
            ))}
          </div>
        </div>
        <div className="blog-hero-right">
          <img src={content?.fields?.cover?.fields?.file?.url} />
        </div>
      </div>
      <div className="blog-body">
        {documentToReactComponents(content?.fields?.details, renderOptions)}
      </div>
    </div>
  );
};

export default ProjectDetails;
