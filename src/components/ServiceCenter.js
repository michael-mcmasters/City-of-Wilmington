import React from 'react';
import Card from "./Card.js";
import "./css/ServiceCenter.css";

const ServiceCenter = () => {
  return (
    <div className="left-screen-margin text-center">
      Service Center
      <div className="card-row">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="d-flex">
        <Card />
        <Card />
        <Card />
      </div>
      <div className="d-flex">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default ServiceCenter;