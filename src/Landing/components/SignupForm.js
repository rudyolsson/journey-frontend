import React from 'react';
import useForm from 'Core/hooks/useForm';
import { StyledFormGroup } from './StyledFormGroup';
import { StyledInput } from './StyledInput';
import { StyledLabel } from './StyledLabel';
import Button from 'Core/components/Button';
import { Link } from 'react-router-dom';
import { theme } from 'styles/theme';

export default function SignupForm() {
  const { values, handleChange, handleSubmit } = useForm({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: ''
    },
    onSubmit(values, errors) {
      alert(JSON.stringify({ values, errors }, null, 2));
    },
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
      <StyledFormGroup>
        <StyledInput
          type="password"
          placeholder="confirm password"
          name="confirmPassword"
          id="confirmPassword"
          required
          value={values.confirmPassword}
          onChange={handleChange}
        />
        <StyledLabel htmlFor="password">confirm password</StyledLabel>
      </StyledFormGroup>
      <Button type="submit" backgroundColor={theme.brightGreen}>
        Signup
      </Button>
      <Button color={theme.pink} border={theme.pink}>
        <Link to="/login">Login</Link>
      </Button>
    </form>
  );
}
