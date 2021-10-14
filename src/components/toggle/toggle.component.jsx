import React from 'react';
import Toggle from 'react-toggle'
import styled from 'styled-components';

const Container = styled.div`
  position: absolute;
  top: 40;
  right: 20;
`;

const Toggler = () => {
    return (
      <Container>
        <label>
            <Toggle
            // defaultChecked={true}
            icons={false}
            // onChange={this.handleTofuChange}
            />
            <span>No icons</span>
        </label>
      </Container>
    )
};

export default Toggler;
