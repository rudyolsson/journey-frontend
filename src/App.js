import React from 'react';
import './App.scss';
import { connect } from 'react-redux';
import { checkToken } from 'Core/store/actions/auth.actions';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';
import LandingLayout from 'Landing/containers/LandingLayout';
import GameMakerLayout from 'GameMaker/containers/GameMakerLayout';
import { ThemeProvider } from 'styled-components';
import { theme } from 'styles/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Router history={history}>
          <Switch>
            <Route path="/dashboard" component={GameMakerLayout}></Route>
            <Route path="/" component={LandingLayout}></Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.authenticated,
    loading: state.auth.loading
  };
};

export default connect(mapStateToProps, { checkToken })(App);
