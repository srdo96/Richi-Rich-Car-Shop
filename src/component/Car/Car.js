import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus } from "@fortawesome/free-solid-svg-icons";
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
        <p>
          Add to Cart
          <FontAwesomeIcon
            className="cart-icon"
            icon={faCartPlus}
          ></FontAwesomeIcon>
        </p>
      </button>
    </div>
  );
};

export default Car;
