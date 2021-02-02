import React from 'react';
import styled from 'styled-components';
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <div>
      <Container>
        Icon
      </Container>
      <div className="text">yoooo</div>
    </div>
  );
};

export default Navbar;

const Container = styled.div`
  background-color: red;
  padding: 2rem;
`;

const SearchBar = styled.div`
  
`;

const Temp = styled.div`
  background-color: red;
  &:hover {
    background-color: blue;
  }
`;