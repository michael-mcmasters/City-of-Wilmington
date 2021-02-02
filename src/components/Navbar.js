import React from 'react';
import styled from 'styled-components';
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <div className="container">
        <div class="d-flex space-btwn">
          <span>Icon</span>
          <input type="text"></input>
        </div>
        <div className="ml-auto">
          <span>Government</span>
          <span>Community</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

// const Container = styled.div`
//   background-color: red;
//   padding: 2rem;
// `;

// const SearchBar = styled.div`

// `;

// const Temp = styled.div`
//   background-color: red;
//   &:hover {
//     background-color: blue;
//   }
// `;