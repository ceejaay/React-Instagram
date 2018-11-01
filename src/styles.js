import React from 'react'
import styled from 'styled-components'


export const StyledButton = styled.button `
  border: 1px solid black;
  border-radius: 3px;
  color: white;
  width: 70px;
  background: lightgray;

  ${props => (props.type === 'primary' ? `background: red;` : null)}

`;


export default StyledButton;
