import React from "react";
import "./index.css";

const SkillSet = (props) => {
  
  return (
    <div className="skill-item">
      <i class="zmdi zmdi-close-circle-o" onClick={()=>{
        props.onSelect(props.id);
      }}></i>
      <li> {props.text} </li>
    </div>
  );
};

export default SkillSet;
