import React from 'react';
import styled from 'styled-components';

const Navbar = () => {
  return (
    <div>
      <div style={{ backgroundColor: "green" }}>
        hello
      </div>
      <Temp>aye</Temp>
    </div>
  );
};

export default Navbar;

const Temp = styled.div`
  background-color: red;
`;