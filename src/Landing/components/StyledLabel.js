import React from 'react';
import styled from 'styled-components';

const Label = styled.label`
  color: ${props => props.theme.brightGreen};
  position: absolute;
  top: 0;
  display: block;
  transition: 0.2s;
  font-size: 1rem;
`;

export default function StyledLabel() {
  return <Label />;
}
