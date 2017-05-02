import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory';

const history = createBrowserHistory();

import store from 'store';
import { AUTH_USER } from 'actions';

import App from 'components/App';
import Main from 'routes/Main';
import Oauth from 'routes/Oauth';
import SignIn from 'routes/SignIn';
import SignOut from 'routes/SignOut';

import 'antd/dist/antd.css';
import 'less/style.less';

const token = localStorage.getItem('token');

if (token) {
  store.dispatch({ type: AUTH_USER });
}

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter history={history}>
      <App>
        <Route exact path="/" component={Main}/>
        <Route path="/signin" component={SignIn}/>
        <Route path="/signout" component={SignOut}/>
        <Route path="/oauth" component={Oauth}/>
      </App>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
