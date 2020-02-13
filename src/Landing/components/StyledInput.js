import styled from 'styled-components';

export const StyledInput = styled.input`
  border: 1px solid ${props => props.theme.brightGreen};
  background-color: inherit;
  color: ${props => props.theme.brightGreen};
  width: 100%;
  border: 0;
  border-bottom: 2px solid ${props => props.theme.brightGreen};
  outline: 0;
  font-size: 1.3rem;
  padding: 7px 0;
  background: transparent;
  transition: border-color 0.2s;
  font-family: ${props => props.theme.fontFamily};

  &::placeholder {
    color: transparent;
  }

  &:placeholder-shown ~ label {
    font-size: 1.3rem;
    cursor: text;
    top: 20px;
  }

  &:focus {
    ~ label {
      position: absolute;
      top: 0;
      display: block;
      transition: 0.2s;
      font-size: 1rem;
      color: $primary;
      font-weight: 700;
    }
    padding-bottom: 6px;
    font-weight: 700;
    border-width: 3px;
    border-image: linear-gradient(to right, $primary, $secondary);
    border-image-slice: 1;
  }
  /* reset input */
  label {
    &:required,
    &:invalid {
      box-shadow: none;
    }
  }
`;
