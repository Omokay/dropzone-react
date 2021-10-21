import {useContext} from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {bigfonts, lightTheme} from "../../constants/theme";
import {LhotseContext} from "../../context/index.context";



const ActionButton = styled.div`
  width: 190px;
  height: 40px;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  font-weight: ${props => props.theme.fontWeight};
  align-items: center;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.backgroundColor};
  
  &:hover{
    cursor: pointer;
    background-color: ${props => props.theme.hover};
    
  }
`;
const theme = {
    backgroundColor: lightTheme.primary,
    fontWeight: bigfonts.fontWeight,
    hover: lightTheme.primary2,
    white: lightTheme.textWhite,

}


const PrimaryButton = ({name, handleClick}) => {
    const {darkTheme} = useContext(LhotseContext);
    return (
        <ThemeProvider theme={theme}>
            <ActionButton style={{
                backgroundColor: (darkTheme) ? '#78dab1' : ''
            }} onClick={handleClick}>
                {name}
            </ActionButton>
        </ThemeProvider>
    )
};

export default PrimaryButton;
