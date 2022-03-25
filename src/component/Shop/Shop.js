import React, { useEffect, useState } from "react";

const Shop = () => {
  const [car, setCar] = useState([]);
  useEffect(() => {
    fetch("carDB.json")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);
  return <div></div>;
};

export default Shop;
