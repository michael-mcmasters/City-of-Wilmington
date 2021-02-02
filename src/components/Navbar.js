import React from 'react';
import logo from "../images/cityofeayetteville.png";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div class="top-row">
          <img src={logo} alt="City's logo" className="logo left-screen-margin" />
          <input type="text" placeholder="Search..."></input>
        </div>
        <div className="ml-auto mt-3 nav-items-container d-flex space-btwn">
          <div>GOVERNMENT</div>
          <div>COMMUNITY</div>
          <div>DOING BUSINESS</div>
          <div>SERVICES</div>
          <div>HOW DO I...</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;