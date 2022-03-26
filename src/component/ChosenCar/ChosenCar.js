import React from "react";

const ChosenCar = ({ randomCar }) => {
  //   console.log(randomCar);
  const { img, name } = randomCar;
  //   console.log(randomCar.img);
  return (
    <div className="randomCar">
      <img src={img} alt="" />
      <p>{name}</p>
    </div>
  );
};

export default ChosenCar;
