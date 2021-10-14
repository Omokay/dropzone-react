import React from 'react';
import styled, {ThemeProvider} from 'styled-components';
import {lightTheme} from "../../constants/theme";


const ActionButton = styled.div`
  width: 190px;
  height: 40px;
  padding: 5px 10px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  text-transform: uppercase;
  align-items: center;
  font-weight: 400;
  color: ${props => props.theme.white};
  background-color: ${props => props.theme.backgroundColor};
  
  &:hover{
    cursor: pointer;
    background-color: ${props => props.theme.hover};
    
  }
`;

const theme = {
    backgroundColor: lightTheme.primary,
    hover: lightTheme.primary2,
    white: lightTheme.textWhite,
}

const PrimaryButton = ({name, handleClick}) => {
    return (
        <ThemeProvider theme={theme}>
            <ActionButton onClick={handleClick}>
                {name}
            </ActionButton>
        </ThemeProvider>
    )
};

export default PrimaryButton;
