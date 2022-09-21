import React, {useState} from 'react';
import "./card.css";

const Card = (props) => {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div className="mp__card" onClick={toggle}>
      <div className="mp__card-preview">
        <img src={props.cover} alt={props.title} />
        {!open && <h3>{props.title}</h3>}
      </div>
      {open && <div className="mp__card-details">
        <h3>{props.title}</h3>
        {props.details}
        
      </div>}
    </div>
  )
}

export default Card