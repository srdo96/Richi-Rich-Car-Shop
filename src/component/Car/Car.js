import React from "react";
import "./Car.css";
const Car = ({ car }) => {
  const { img, name, price } = car;
  return (
    <div className="car">
      <img src={img} alt="" />
      <div className="car-info">
        <h3>{name}</h3>
        <p>Price: $ {price}</p>
      </div>
      <button className="add-cart-btn">
        <p>Add to Cart</p>
      </button>
    </div>
  );
};

export default Car;
