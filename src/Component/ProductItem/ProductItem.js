import React from "react";
import "./ProductItem.css";
import Tab from "../Tab/Tab";
import Button from "../Button/Button";
import Group68 from "../../Img/Group 68.png";
import Group69 from "../../Img/Group 69.png";
import Group72 from "../../Img/Group 72.png";
const ProductItem = ({ data }) => {
  const img = [
    { imgName: Group68 },
    { imgName: Group69 },
    { imgName: Group72 },
  ];
  return (
    <div>
      <div className="productItem-body">
        {data?.map((item, index) => {
          return (
            <div className="img-container">
              <img width="100%" height="auto" src={item?.imgName} alt="img" />
              <div className="overlay">
                <div className="contain">
                  {img?.map((ig, index) => {
                    return (
                      <img
                        className="img-com"
                        src={ig?.imgName}
                        alt="img"
                        height="40px"
                        width="40px"
                      />
                    );
                  })}
                </div>
              </div>
              <div className="product-items">
                <span className="item-names">{item?.itemName}</span>
                <div className="price-body">
                  <span className="current-product-price">
                    &#x20B9;{item?.currentPrice}
                  </span>
                  <del className="product-price">&#x20B9;{item?.oldPrice}</del>
                </div>
                <Tab />
              </div>
            </div>
          );
        })}
      </div>
      <div className="btn-body">
        <Button tittle="View All" />
      </div>
    </div>
  );
};

export default ProductItem;
