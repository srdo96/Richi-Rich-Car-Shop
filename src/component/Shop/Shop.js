import React, { useEffect, useState } from "react";
import Car from "../Car/Car";
import Cart from "../Cart/Cart";
import ChosenCar from "../ChosenCar/ChosenCar";
import "./Shop.css";
const Shop = () => {
  const [cars, setCars] = useState([]);
  const [cart, setCart] = useState([]);
  const [randomCar, setRandomCar] = useState({});
  useEffect(() => {
    fetch("carDB.json")
      .then((res) => res.json())
      .then((data) => setCars(data));
  }, []);
  // console.log(cart);
  const handelAddToCart = (selectedCar) => {
    let newCart = [];
    const exist = cart.find((car) => car.id === selectedCar.id);
    if (!exist) {
      newCart = [...cart, selectedCar];
    }

    // console.log(newCart);
    setCart(newCart);
  };
  const handelChoose = () => {
    const num = Math.floor(Math.random() * 4);
    const randomCar = cart[num];
    setRandomCar(randomCar);
    console.log(cart[num]);
  };

  const handelChooseAgain = () => {
    const emptyCart = [];
    setCart(emptyCart);
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
        <button onClick={handelChoose} className="for-me-btn">
          <p>Choose 1 For Me</p>
        </button>
        <br />
        <button onClick={handelChooseAgain} className="again-btn">
          <p>Choose Again</p>
        </button>
        {/* <div className="randomCar">
          <img src={randomCar.img} alt="" />
          <p>{randomCar.name}</p>
        </div> */}
        <ChosenCar key={randomCar.id} randomCar={randomCar}></ChosenCar>
      </div>
    </div>
  );
};

export default Shop;
