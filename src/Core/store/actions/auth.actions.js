import {} from 'redux';
import * as AuthActionTypes from 'Core/store/types/auth.types';
import { instance } from 'Utils/axios.instance';
import { alertError } from 'Core/store/actions/alert.actions';
import {
  setStorageItem,
  isLoggedIn,
  getStorageItem
} from 'Utils/jwt-helper.service';
import history from '../../../history';

export const signUp = credentials => async dispatch => {
  dispatch({
    type: AuthActionTypes.SIGNUP,
    payload: { credentials }
  });
  try {
    const response = await instance().post('/auth/register', credentials);
    dispatch(loginSuccess(response.data));
  } catch (e) {
    const { message } = e.response.data;
    dispatch(signUpError(message));
  }
};

export const signUpSuccess = profile => ({
  type: AuthActionTypes.SIGNUP_SUCCESS,
  payload: { profile }
});

export const signUpError = message => (dispatch, getState) => {
  dispatch({
    type: AuthActionTypes.SIGNUP_ERROR,
    payload: { message }
  });
  const errorMessage = getState().auth.error;
  dispatch(alertError(errorMessage));
};

export const login = credentials => async dispatch => {
  dispatch({ type: AuthActionTypes.LOGIN });
  try {
    const response = await instance().post('/auth/token', credentials);
    dispatch(loginSuccess(response.data));
  } catch (e) {
    const { message } = e.response.data;
    dispatch(loginError(message));
  }
};

export const loginSuccess = profile => async (dispatch, getState) => {
  dispatch({
    type: AuthActionTypes.LOGIN_SUCCESS,
    payload: profile
  });
  const token = getState().auth.user;
  setStorageItem('token', token);
  history.push('/dashboard');
};

export const loginError = message => async (dispatch, getState) => {
  dispatch({
    type: AuthActionTypes.LOGIN_ERROR,
    payload: { message }
  });
  const errorMessage = getState().auth.error;
  dispatch(alertError(errorMessage));
};

export const logout = () => ({
  type: AuthActionTypes.LOGOUT
});

export const authClear = () => ({
  type: AuthActionTypes.CLEAR
});

export const forgotPassword = email => ({
  type: AuthActionTypes.FORGOT,
  payload: { email }
});

export const checkToken = () => async (dispatch, getState) => {
  const storedToken = isLoggedIn();
  const decoded = getStorageItem('token');
  if (storedToken) {
    dispatch({
      type: AuthActionTypes.LOGIN_SUCCESS,
      payload: decoded
    });
  }
};
