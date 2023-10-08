import React, { Suspense, lazy } from "react";
import Card from "../Component/Card/Card";
import ProductHeading from "../Component/ProductHeading/ProductHeading";
import Subscribe from "../Component/Subscribe/Subscribe";
import Rectangle3 from "../Img/Rectangle 3.png";
import Rectangle4 from "../Img/Rectangle 4.png";
import Rectangle5 from "../Img/Rectangle 5.png";
import Rectangle6 from "../Img/Rectangle 6.png";
import Rectangle7 from "../Img/Rectangle 7.png";
import Rectangle8 from "../Img/Rectangle 8.png";
import bann from "../Img/banner1 2.png";
import bann1 from "../Img/banner1 3.png";
import diamond from "../Img/diamond 1.png";
import discount from "../Img/discount 1.png";
import "./HomePage.css";

const Navbar = lazy(() => import("../Component/Navbar/Navbar"));
const Header = lazy(() => import("../Component/Header/Header"));
const AvatarItem = lazy(() => import("../Component/AvatarItem/AvatarItem"));
const Banner = lazy(() => import("../Component/Banner/Banner"));
const ProductItem = lazy(() => import("../Component/ProductItem/ProductItem"));
const Information = lazy(() => import("../Component/Information/Information"));
const FeaturedProducts = lazy(() =>
  import("../Component/FeaturedProducts/FeaturedProducts")
);
const Collections = lazy(() => import("../Component/Collections/Collections"));
const Footer = lazy(() => import("../Component/Footer/Footer"));

const HomePage = () => {
  const imgFirst = [
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
    {
      imgName: Rectangle3,
      itemName: "Men Henley Neck Full Sleeve Red Wine",
      currentPrice: "399",
      oldPrice: "1299",
    },
    {
      imgName: Rectangle7,
      itemName: "Men Henley Neck Full Sleeve Red Wine",
      currentPrice: "399",
      oldPrice: "1299",
    },
    {
      imgName: Rectangle8,
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
    <>
      <Suspense fallback={<div className="lazy-loading">Please Wait...</div>}>
        <Navbar />
        <Header />
        <div className="banner-items">
          <AvatarItem />
          <Banner />
          <ProductHeading tittle="Trending T-Shirts" />
          <ProductItem data={imgFirst} />
          <FeaturedProducts />
        </div>
        <img width="100%" height="auto" src={bann} alt="img" />
        <div className="banner-items">
          <ProductHeading tittle="New Products" />
          <ProductItem data={imgSecond} />
          <ProductHeading tittle="Best Selling Products" />
          <ProductItem data={imgSecond} />
          <Collections />
        </div>
        <img
          className="ban-img"
          width="100%"
          height="auto"
          src={bann1}
          alt="img"
        />
        <div className="card-item">
          <Card img={diamond} bg="#CCCEA7" offPrise="85% OFF" />
          <Card img={discount} bg="#D6BEBE" offPrise="75% OFF" />
        </div>
        <Information />
        <div className="banner-items">
          <Subscribe />
        </div>
        <div className="mid-border"></div>
        <div className="banner-items">
          <Footer />
        </div>
      </Suspense>
    </>
  );
};

export default HomePage;
