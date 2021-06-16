import React from 'react'
//import "../App.css";

const Dish = ({ name, msg }) => {
  return (
    <div>
      <h3>{name}</h3>
      <p>{msg}</p>
      <span>Vuttons</span>
    </div >
  )
}

export default Dish;
