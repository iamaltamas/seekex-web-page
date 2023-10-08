import React from "react";
import Lorem from "./Lorem";
import FooterOnlineShopping from "./FooterOnlineShopping";
import map from "../../Img/map.png";
import phone from "../../Img/phone.png";
import email from "../../Img/email.png";
import "./Footer.css";
const Footer = () => {
  const tittle1 = [
    { tittleName: "Men’s T-Shirts" },
    { tittleName: " Women’s Wear" },
    { tittleName: "Winter Collections" },
    { tittleName: "Hooded T-Shirts" },
    { tittleName: "Streetwear Collections" },
  ];
  const tittle2 = [
    { tittleName: "About Us" },
    { tittleName: "Terms & Conditions" },
    { tittleName: "Shipping & Returns Policy" },
    { tittleName: "Cancellation & Refund Policy" },
    { tittleName: "Contact Us" },
  ];
  const tittle3 = [
    {
      tittleName:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      img: map,
    },
    { tittleName: "Call Us: 1234567890", img: phone },
    { tittleName: "Email Us: info@yourmail.com", img: email },
  ];

  return (
    <div className="footer-body">
      <Lorem />
      <FooterOnlineShopping tittle={tittle1} heading="ONLINE SHOPPING" />
      <FooterOnlineShopping tittle={tittle2} heading="CUSTOMER POLICIES" />
      <FooterOnlineShopping tittle={tittle3} heading="STORE INFORMATION" />
    </div>
  );
};

export default Footer;
