import React, {useState} from "react";
import "./collapsible.css";

const Collapsible = (props) => {
  const [open, setOPen] = useState(false);

  const toggle = () => {
    setOPen(!open);
  };

  return (
    <div onClick={toggle}>
      <h2>{props.label1}</h2>
      <h3>{props.label2}</h3>
      <h3>{props.label3}</h3>
      {open && <div className="toggle">{props.children}</div>}
    </div>
  );
};

export default Collapsible;
