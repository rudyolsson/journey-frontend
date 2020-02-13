import React from 'react';
import { connect } from 'react-redux';
import { login, signUp } from 'Core/store/actions/auth.actions';
import styled from 'styled-components';
import triangle from 'images/triangle.jpg';
import { Switch, Route, Redirect } from 'react-router';
import SignupForm from 'Landing/components/SignupForm';
import LoginForm from 'Landing/components/LoginForm';

const Wrapper = styled.div`
  background-color: ${props => props.theme.black};
  padding: 40px;
  text-align: center;
  min-height: 100vh;
`;

const AuthWidget = styled.div`
  border-radius: 20px;
  width: 475px;
  border: 5px solid ${props => props.theme.brightGreen};
  margin: 0 auto;
`;

const Triangle = styled.img`
  height: 300px;
  width: 475px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom: 5px solid ${props => props.theme.brightGreen};
`;

const CardBody = styled.div`
  padding: 20px;
`;

const Copyright = styled.div`
  width: 100%;
  color: ${props => props.theme.pink};
  margin-top: 20px;
  padding: 20px;
`;

function LandingLayout(props) {
  return (
    <Wrapper>
      <AuthWidget>
        <Triangle src={triangle} />
        <CardBody>
          <Switch>
            <Redirect exact from="/" to="/login" />
            <Route path="/login" exact>
              <LoginForm onSubmit={values => props.login(values)} />
            </Route>
            <Route path="/register" exact>
              <SignupForm onSubmit={values => props.signUp(values)} />
            </Route>
          </Switch>
        </CardBody>
      </AuthWidget>
      <Copyright variant="body2" color="textSecondary" align="center">
        Copyright © Roke Island Games {new Date().getFullYear()}.
      </Copyright>
    </Wrapper>
  );
}

const mapStateToProps = state => {
  return {
    alert: state.alert,
    authError: state.auth.error
  };
};

export default connect(mapStateToProps, { login, signUp })(LandingLayout);
