import React, { useEffect, useState } from "react";
import Car from "../Car/Car";
import Cart from "../Cart/Cart";
import ChosenCar from "../ChosenCar/ChosenCar";
import "./Shop.css";
const Shop = () => {
  const [cars, setCars] = useState([]);
  const [cart, setCart] = useState([]);
  const [randomCar, setRandomCar] = useState({});
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("carDB.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);

  const handelAddToCart = (selectedCar) => {
    let newCart = [];
    const exist = cart.find((car) => car.id === selectedCar.id);
    if (!exist) {
      newCart = [...cart, selectedCar];
    }
    setCart(newCart);
  };

  const handelChoose = () => {
    if (cart.length === 4) {
      const num = Math.floor(Math.random() * 4);
      const randomCar = cart[num];
      setRandomCar(randomCar);
      console.log(randomCar);
      setMessage("");
    } else {
      setMessage("You have to select 4 cars");
    }
  };
  const handelChooseAgain = () => {
    setCart([]);
    setRandomCar({});
  };

  return (
    <div className="shop">
      <div>
        <h1 className="title">Select 4 Cars</h1>
        <div className="container">
          {cars.map((car) => (
            <Car key={car.id} car={car} handelAddToCart={handelAddToCart}></Car>
          ))}
        </div>
      </div>
      <div className="cart-container">
        <h2>Selected Cars</h2>
        <div>
          {cart.map((car) => (
            <Cart key={car.id} car={car}></Cart>
          ))}
        </div>
        <p className="message">{message}</p>
        <button onClick={handelChoose} className="for-me-btn">
          <p>Choose 1 For Me</p>
        </button>
        <br />
        <button onClick={handelChooseAgain} className="again-btn">
          <p>Choose Again</p>
        </button>

        <ChosenCar key={randomCar.id} randomCar={randomCar}></ChosenCar>
      </div>
    </div>
  );
};

export default Shop;
