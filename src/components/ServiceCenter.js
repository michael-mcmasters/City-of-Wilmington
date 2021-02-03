import React from 'react';
import Card from "./Card.js";
import "./css/ServiceCenter.css";
// import img1 from "";
import img1 from "../images/card-images/20160430_161444.jpg"
import img2 from "../images/card-images/20160430_183039_2.jpg"
import img3 from "../images/card-images/20160501_173745.jpg"
import img4 from "../images/card-images/20160501_175007.jpg"
import img5 from "../images/card-images/20160921_161617.jpg"
import img6 from "../images/card-images/pink-sea-city-skycrapper-5k-ky-2560x1440.jpg"
import img7 from "../images/card-images/20160430_161444.jpg"
import img8 from "../images/card-images/20160430_161444.jpg"
import img9 from "../images/card-images/20160430_161444.jpg"

const ServiceCenter = () => {
  return (
    <div className="edge-screen-margin text-center">
      <h2 className="service-center-txt">Service Center</h2>
      <div className="card-row">
        <Card img={img1} caption="City Departments" />
        <Card img={img2} caption="Board, Committees &amp; Commissions" />
        <Card img={img3} caption="Participate in Public Meetings" />
      </div>
      <div className="card-row">
        <Card img={img4} caption="Alerts and Notifications" />
        <Card img={img5} caption="Rent a Bicycle" />
        <Card img={img6} caption="Road Lanes and Closures" />
      </div>
      <div className="card-row">
        <Card img={img7} caption="City Code" />
        <Card img={img8} caption="Media Room" />
        <Card img={img9} caption="Your Tax Dollars at Work" />
      </div>
    </div>
  );
};

export default ServiceCenter;