import React from "react";
import StreetWear from "../../Img/Group 50.png";
import Striped from "../../Img/Group 51.png";
import RoundNeck from "../../Img/Group 52.png";
import Printed from "../../Img/Group 55.png";
import Oversized from "../../Img/Group 54.png";
import HalfSleeves from "../../Img/Group 53.png";
import "./Collections.css";
const Collections = () => {
  const img = [
    { imgName: StreetWear, productName: "Streetwear Collections" },
    { imgName: Striped, productName: "Striped T-Shirts" },
    { imgName: RoundNeck, productName: "Round Neck T-Shirts" },
    { imgName: Printed, productName: "Printed T-Shirts" },
    { imgName: Oversized, productName: "Oversized T-Shirts" },
    { imgName: HalfSleeves, productName: "Half Sleeves T-Shirts" },
  ];
  return (
    <div className="collection-body">
      {img?.map((item, index) => {
        return (
          <div key={index} className="collection-body">
            <img width="100%" height="auto" src={item?.imgName} alt="img" />
            <div className="product-body">
              <p className="item-name">{item?.productName}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Collections;
