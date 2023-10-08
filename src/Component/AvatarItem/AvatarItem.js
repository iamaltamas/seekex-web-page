import React from "react";
import MensTShirts from "../../Img/Group 244.png";
import WomenWear from "../../Img/Group 245.png";
import WinterCollections from "../../Img/Group 246.png";
import HoodedTShirts from "../../Img/Group 247.png";
import PoloNeckTShirts from "../../Img/Group 248.png";
import FullSleevesTShirts from "../../Img/Group 249.png";
import "./AvatarItem.css";
const AvatarItem = () => {
  const img = [
    { imgName: MensTShirts, productName: "Men’s T-Shirts" },
    { imgName: WomenWear, productName: "Women’s Wear" },
    { imgName: WinterCollections, productName: "Winter Collections" },
    { imgName: HoodedTShirts, productName: "Hooded T-Shirts" },
    { imgName: PoloNeckTShirts, productName: "Polo Neck T-Shirts" },
    { imgName: FullSleevesTShirts, productName: "Full Sleeves T-Shirts" },
  ];
  return (
    <div className="avatar-img-body">
      {img?.map((item, index) => {
        return (
          <div className="avatar-item">
            <img src={item.imgName} alt="img" width="100%" height="auto" />
            <div className="product-name">
              <span>{item?.productName}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AvatarItem;
