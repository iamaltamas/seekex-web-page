import React from "react";
import styled from "styled-components";
import "./Card.css";
const CardBody = styled.div`
  width: 49%;
  height: 652px;
  background-color: ${(props) => (props.bg ? props.bg : "#00aaff")};
  display: flex;
  flex-direction: column;
  align-items: center;
  @media only screen and (max-width: 967px) {
    height: 550px;
  }
`;

const Card = ({ bg, img, offPrise }) => {
  return (
    <CardBody bg={bg}>
      <img className="card-img" src={img} alt="img" />
      <span className="tittle-one">Hurry Up!</span>
      <p className="tittle-two">{offPrise}</p>
      <p className="tittle-three">Sale</p>
      <button className="card-btn">Shop Now</button>
    </CardBody>
  );
};

export default Card;
