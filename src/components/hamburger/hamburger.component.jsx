import React from 'react';
import styled from 'styled-components';


const Ham = styled.button`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: white;
  &:hover {
    cursor: pointer;
  }
`;

const Hamburger = () => {
    return (
        <Ham>
            <svg stroke="currentColor" fill="none" strokeWidth="0" viewBox="0 0 24 24" className="menu-icon"
                 height="2em" width="3em" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 6h16M4 12h16m-7 6h7"/>
            </svg>
        </Ham>
    )
};

export default Hamburger;
