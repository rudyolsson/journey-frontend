import React from 'react';
import useForm from 'Core/hooks/useForm';
import { StyledFormGroup } from './StyledFormGroup';
import { StyledInput } from './StyledInput';
import { StyledLabel } from './StyledLabel';
import Button from 'Core/components/Button';
import { Link } from 'react-router-dom';
import { theme } from 'styles/theme';
import styled from 'styled-components';

export default function LoginForm() {
  const { values, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit(values, errors) {},
    validate(values) {
      const errors = {};
      if (values.name === '') {
        errors.name = 'Please enter a name';
      }
      return errors;
    }
  });

  return (
    <form onSubmit={handleSubmit}>
      <StyledFormGroup>
        <StyledInput
          type="email"
          placeholder="email"
          name="email"
          id="email"
          required
          value={values.email}
          onChange={handleChange}
          autocomplete="off"
        />
        <StyledLabel htmlFor="email">email</StyledLabel>
      </StyledFormGroup>
      <StyledFormGroup>
        <StyledInput
          type="password"
          placeholder="password"
          name="password"
          id="password"
          required
          value={values.password}
          onChange={handleChange}
        />
        <StyledLabel htmlFor="password">password</StyledLabel>
      </StyledFormGroup>
      <Button type="submit" backgroundColor={theme.brightGreen}>
        Login
      </Button>
      Don't have an account?
      <Button color={theme.pink}>
        <Link to="/signup">Sign up Here</Link>
      </Button>
    </form>
  );
}
