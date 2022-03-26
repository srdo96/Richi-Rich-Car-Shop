import React from "react";
import "./Cart.css";

const Cart = ({ car }) => {
  // console.log(car.img);

  return (
    <div className="cart">
      <div className="selected-car">
        <div>{/* <img src={car.img} alt="" /> */}</div>
        <p>{car.name}</p>
      </div>
    </div>
  );
};

export default Cart;
