import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger';
import promiseMiddleware from 'redux-promise';

import reducers from 'reducers';

const store = createStore(reducers, compose(
  applyMiddleware(
    promiseMiddleware,
    createLogger()
  )
));

export default store;
