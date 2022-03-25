import React, { useEffect, useState } from "react";
import Car from "../Car/Car";
import Cart from "../Cart/Cart";
import "./Shop.css";
const Shop = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    fetch("carDB.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  return (
    <div className="shop">
      <div className="container">
        {cars.map((car) => (
          <Car key={car.id} car={car}></Car>
        ))}
      </div>
      <div className="cart">
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Shop;
