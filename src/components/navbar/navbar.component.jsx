import {useContext} from 'react';
import styled from 'styled-components';
import Logo from '../logo/logo.component';
import Toggler from "../toggle/toggle.component";
import {LhotseContext} from "../../context/index.context";


const Container = styled.div`
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 0;
  -webkit-box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);
  box-shadow: 0 1px 3px 0 rgba(0,0,0,0.1),0 1px 2px 0 rgba(0,0,0,0.06);
  
`;

const Navbar = () => {
    const {darkTheme, setTheme} = useContext(LhotseContext);

    const handleThemeChange = () => {
        setTheme(!darkTheme);
    }
    return (
        <>
            <Container style={{
                backgroundColor: (darkTheme) ? '#e8e8ea' : ''
            }}>
                <Logo/>
                <Toggler handleClick={handleThemeChange}/>
            </Container>
        </>
    )
};

export default Navbar;
