import React from "react";
import "./Cart.css";

const Cart = () => {
  return (
    <div className="cart">
      <h2>Selected Cars</h2>
      <button className="for-me-btn">
        <p>Choose 1 For Me</p>
      </button>
      <br />
      <button className="again-btn">
        <p>Choose Again</p>
      </button>
    </div>
  );
};

export default Cart;
