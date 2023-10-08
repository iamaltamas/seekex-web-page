import React from "react";
import "./Subscribe.css";
import MaskGroup from "../../Img/Mask group.png";
const Subscribe = () => {
  return (
    <div className="subscribe-body">
      <img src={MaskGroup} alt="img" width="100%" height="317px" />
      <div>
        <span className="tittle">
          Subscribe to get updates on exciting offers & deals
        </span>
      </div>
      <div className="input-body">
        <input className="text-input" placeholder="Enter your email" />
        <div className="subscribe-btn">Subscribe</div>
      </div>
    </div>
  );
};

export default Subscribe;
