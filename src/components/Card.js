import React from 'react';
import "./css/Card.css";

const Card = (props) => {
  return (
    <div className="card-container">
      <img className="card-img" src={props.img} />
      <p>{props.caption}</p>
    </div>
  );
};

export default Card;