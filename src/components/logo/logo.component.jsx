import React from 'react';
import styled from 'styled-components';


const LogoWrapper = styled.a`
   width: 226px;
   height: 34px;
   padding: 5px;
`;

const Loggo = styled.img`
   width: 100%;
   height: 100%;
`;

const lhosteLogo = 'https://www.lhotse.de/hubfs/Lhotse_August_2021/Images/logo.svg';
const logoAddress = 'https://www.lhotse.de/en/';

const Logo = () => {
    return (
        <LogoWrapper href={logoAddress}>
          <Loggo src={lhosteLogo} alt='Lhotse'/>
        </LogoWrapper>
    )
};

export default Logo;
