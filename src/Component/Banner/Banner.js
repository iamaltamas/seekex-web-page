import React from "react";
import firstImg from "../../Img/image 2.png";
import secondImg from "../../Img/image 3.png";
import thirdImg from "../../Img/image 4.png";
import forthImg from "../../Img/image 5.png";
import fiveImg from "../../Img/image 6.png";
import "./Banner.css";
const Banner = () => {
  const img = [{ imgName: firstImg }, { imgName: secondImg }];
  const imgSecond = [
    { imgName: thirdImg },
    { imgName: forthImg },
    { imgName: fiveImg },
  ];

  return (
    <>
      <div className="banner-body">
        {img?.map((item, index) => {
          return (
            <img width="100%" height="auto" src={item.imgName} alt="img" />
          );
        })}
      </div>
      <div className="banner-second-body">
        {imgSecond?.map((item, index) => {
          return (
            <img width="100%" height="auto" src={item.imgName} alt="img" />
          );
        })}
      </div>
    </>
  );
};

export default Banner;
