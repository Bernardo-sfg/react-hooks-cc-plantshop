import React, { useEffect, useState } from "react";
// import {searchValue} from "./Search";

function PlantCard() {

  const [plants, setPlants] = useState([])
  const [onOff, setOnOff] = useState([])



  useEffect(() => {
    fetch(`http://localhost:6001/plants`)
    .then(res => res.json())
    .then(data => setPlants(data))
    .catch(err => console.log(err))
  }, [])

  return (
    <ul>
      {plants.map(plant => (
        <li key={plant.id} className="card" data-testid="plant-item">
          <img src={plant.image} alt={plant.name} />
          <h4>{plant.name}</h4>
          <p>Price: {plant.price}</p>
          <button onClick={() => setOnOff
            (!onOff)}>{onOff ? plant.inStock : plant.inStock = "Not In Stock" }
          </button>
        </li>
      ))}
    </ul>
  );
}

export default PlantCard;
