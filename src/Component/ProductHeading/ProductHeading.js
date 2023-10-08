import React from "react";
import lineImg from "../../Img/Line 1.png";
import "./ProductHeading.css";
const ProductHeading = ({ tittle }) => {
  return (
    <div className="productHeading-body">
      <img className="productHeading-img" src={lineImg} alt="img" />
      <span className="product-tittle">{tittle}</span>
      <img className="productHeading-img" src={lineImg} alt="img" />
    </div>
  );
};

export default ProductHeading;
