import React, { useEffect, useState } from "react";
import Car from "../Car/Car";

const Shop = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("carDB.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div>
      {cars.map((car) => (
        <Car key={car.id} car={car}></Car>
      ))}
    </div>
  );
};

export default Shop;
