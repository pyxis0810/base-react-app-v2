import { createAction } from 'redux-actions';
import axios from 'axios';

import { baseUrl } from './';

import {
  GET_LOCALE,
  SET_LOCALE
} from './';

export const getLocale = createAction(GET_LOCALE, () => {
  return axios.get(`${baseUrl}/locale`)
    .then(response => {
      return response.data;
    })
    .catch(error => {
      console.log(error);
      return 'ko';
    });
});

export const setLocale = createAction(SET_LOCALE, (locale) => {
  return locale;
});
