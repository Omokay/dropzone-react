import styled from 'styled-components';


const LogoWrapper = styled.a`
   width: 216px;
   height: 30px;
   padding: 5px;

  @media (max-width: 908px){
    width: 186px;
    height: 28px;
    padding: 3px;
  }

  @media (max-width: 608px){
    width: 126px;
    height: 24px;
    padding: 3px;
  }
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
