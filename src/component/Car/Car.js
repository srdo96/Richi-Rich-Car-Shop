import React from "react";
import "./Car.css";
const Car = ({ car }) => {
  console.log("inside car", car);
  return (
    <div className="car">
      <img src={car.img} alt="" />
    </div>
  );
};

export default Car;
