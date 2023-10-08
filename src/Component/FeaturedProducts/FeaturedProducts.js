import React from "react";
import ProductHeading from "../ProductHeading/ProductHeading";
import ProductItem from "../ProductItem/ProductItem";
import Rectangle3 from "../../Img/Rectangle 3.png";
import Rectangle4 from "../../Img/Rectangle 4.png";
import Rectangle5 from "../../Img/Rectangle 5.png";
import Rectangle6 from "../../Img/Rectangle 6.png";
const FeaturedProducts = () => {
  const imgSecond = [
    {
      imgName: Rectangle3,
      itemName: "Men Henley Neck Full Sleeve Red Wine",
      currentPrice: "399",
      oldPrice: "1299",
    },
    {
      imgName: Rectangle4,
      itemName: "Men Henley Neck Full Sleeve Red Wine",
      currentPrice: "399",
      oldPrice: "1299",
    },
    {
      imgName: Rectangle5,
      itemName: "Men Henley Neck Full Sleeve Red Wine",
      currentPrice: "399",
      oldPrice: "1299",
    },
    {
      imgName: Rectangle6,
      itemName: "Men Henley Neck Full Sleeve Red Wine",
      currentPrice: "399",
      oldPrice: "1299",
    },
  ];
  return (
    <div>
      <ProductHeading tittle="Featured Products" />
      <ProductItem data={imgSecond} />
    </div>
  );
};

export default FeaturedProducts;
