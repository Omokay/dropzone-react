import React, {useContext} from "react";
import styled, {ThemeProvide} from 'styled-components';
import './toggler.css';
import {LhotseContext} from "../../context/index.context";

const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
  
`;

const Check = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: .4s;
  transition: .4s;
  border-radius: 34px;
  box-shadow: 0 0 1px #2196F3;
  
`;

const Toggler = ({handleClick}) => {

    return (
            <label className="switch">
                <input type="checkbox" onClick={handleClick}/>
                    <span className="slider round"></span>
            </label>
    )
};

export default Toggler;
