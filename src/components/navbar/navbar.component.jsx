import React from 'react';
import styled from 'styled-components';
import Logo from '../logo/logo.component';



const Container = styled.div`
  width: 100vw;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 50px;
  margin: 0;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);
  
`;

const Navbar = () => {
    return (
        <Container>
          <Logo/>
        </Container>
    )
};

export default Navbar;
