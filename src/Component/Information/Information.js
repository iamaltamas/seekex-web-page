import React from "react";
import Ellipse27 from "../../Img/Ellipse 27.png";
import Ellipse39 from "../../Img/Ellipse 39.png";
import Group199 from "../../Img/Group 199.png";
import Group200 from "../../Img/Group 200.png";
import Group201 from "../../Img/Group 201.png";
import Group202 from "../../Img/Group 202.png";
import line from "../../Img/Line 1.png";
import "./Information.css";
const Information = () => {
  const img = [
    { imgName: Group199 },
    { imgName: Group200 },
    { imgName: Group201 },
    { imgName: Group202 },
  ];
  return (
    <div className="information-body">
      <img src={Ellipse27} alt="img" className="ellipse-27" />
      {img?.map((item, index) => {
        return (
          <>
            <img className="mid-img" src={item?.imgName} alt="img" />
            {/* <img src={line} alt="img" /> */}
          </>
        );
      })}
      <img src={Ellipse39} alt="img" className="ellipse-39" width="94px" />
    </div>
  );
};

export default Information;
