import React from 'react';
import styled from 'styled-components';

const FormGroup = styled.div`
  position: relative;
  padding: 15px 0 0;
  margin-top: 10px;
  font-family: ${props => props.theme.fontFamily};
`;

export default function StyledFormGroup() {
  return <FormGroup />;
}
