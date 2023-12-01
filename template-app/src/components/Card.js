import React from "react";
import data from "../data";
import "../scss/card.scss";

const Card = () => {
  console.log(data);
  return data.map((item) => (
    <div>
      <div className="productCard" key={item.id}>
        <h1>{item.name}</h1>
        <h3>{item.job}</h3>
        <img className="cardImage" style={{ height: "250px",  }} src={item.img}  alt="item"/>
        <p>{item.comment}</p>
        <div>
          <button className="smallBtn">Small</button>
          <button className="largeBtn">Large</button>
        </div>
      </div>
    </div>
  ));
};

export default Card;
