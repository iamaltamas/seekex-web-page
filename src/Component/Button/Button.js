import React from "react";
import "./Button.css";
const Button = ({ tittle }) => {
  return (
    <div>
      <button className="btn">
        <span className="btn-tittle">{tittle}</span>
      </button>
    </div>
  );
};

export default Button;
