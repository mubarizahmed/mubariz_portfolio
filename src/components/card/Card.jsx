import React, { useState } from "react";
import { IconContext } from "react-icons";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
import "./card.css";

const Card = (props) => {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div className="card" onHover={toggle}>
      <img src={props.cover} alt={props.title} />
      <div className="card-preview">
        <div className="card-title">
          <h3>{props.title}</h3>
          <IconContext.Provider value={{ className: 'card-icon' }}>
            <Link
              to={`/projectDetails/${props.id}`}>
              <IoArrowForwardCircleOutline />
            </Link>
          </IconContext.Provider>
        </div>
        {open && <div className="card-tags">{props.details}</div>}
      </div>
    </div>
  );
};

export default Card;
