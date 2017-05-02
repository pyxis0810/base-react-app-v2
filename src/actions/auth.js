import { createAction } from 'redux-actions';
import axios from 'axios';

import { baseUrl } from './';

import {
  AUTH_USER,
  AUTH_GOOGLE,
  AUTH_FACEBOOK,
  AUTH_ERROR,
  AUTH_UNMOUNT,
  UNAUTH_USER,
} from './';

export const authError = createAction(AUTH_ERROR, error => error);


export const signIn = createAction(AUTH_USER, ({ email, password }) => {
  return axios.post(`${baseUrl}/auth/signin`, { email, password })
    .then(response => {
      console.log(response);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email', response.data.email);
      localStorage.setItem('role', response.data.role);
      return response.data;
    })
    .catch(error => authError('error.signin.failed'));
});

export const signUp = createAction(AUTH_USER, ({ email, password }) => {
  return axios.post(`${baseUrl}/auth/signup`, { email, password })
    .then(response => {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('email', response.data.email);
      localStorage.setItem('role', response.data.role);
      return response.data;
    })
    .catch(error => authError(error.response.data.error));
});

export const signOut = createAction(UNAUTH_USER, () => {
  localStorage.removeItem('token');
  localStorage.removeItem('email');
  localStorage.removeItem('role');
});

export const googleAuth = createAction(AUTH_GOOGLE, () => {
  return location.href=`${baseUrl}/auth/google`;
});

export const getInfo = createAction(AUTH_USER, (token) => {
  return axios.get(`${baseUrl}/auth/info`, { headers: { Authorization: token } })
    .then(response => {
      localStorage.setItem('token', token);
      localStorage.setItem('email', response.data.email);
      localStorage.setItem('role', response.data.role);
      return response.data;
    });
});

export const facebookAuth = createAction(AUTH_FACEBOOK, () => {
  return location.href=`${baseUrl}/auth/facebook`;
});

export const unmountAuth = createAction(AUTH_UNMOUNT);

