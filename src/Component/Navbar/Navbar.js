import React from "react";
import "./Navbar.css";
import bar from "../../Img/Group 3.png";
import hart from "../../Img/Vector (1).png";
import cart from "../../Img/Vector (2).png";
import search from "../../Img/Vector.png";
import profile from "../../Img/Vector (4).png";
const Navbar = () => {
  const logo = [
    { logoName: search },
    { logoName: hart },
    { logoName: cart },
    { logoName: profile },
  ];
  return (
    <div className="nav-body">
      <div className="container">
        <div className="nev-item">
          <img src={bar} alt="Logo" />
        </div>

        <div className="header-tittle">Logo Here</div>
        <div className="nav-right-items">
          {logo.map((item, index) => {
            return (
              <div className="lo-img">
                <img src={item?.logoName} alt="Logo" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
