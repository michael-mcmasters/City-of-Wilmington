import React from 'react';
import Card from "./Card.js";
import "./css/ServiceCenter.css";
// import img1 from "";
import img1 from "../images/card-images/20160430_161444.jpg"

const ServiceCenter = () => {
  return (
    <div className="edge-screen-margin text-center">
      Service Center
      <div className="card-row">
        <Card img={img1} caption="City Departments" />
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