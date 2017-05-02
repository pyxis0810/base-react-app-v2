import React, { Component } from 'react';
import { connect } from 'react-redux';

import { AUTH_USER } from 'actions';
import { getInfo } from 'actions/auth';

class Oauth extends Component {
  static store(state) {
    return {
      auth: state.auth
    };
  }

  getQuerystring = (param) => {
    const _tempUrl = window.location.search.substring(1);
    const _tempArray = _tempUrl.split('&');

    for(let i = 0; _tempArray.length; i++) {
      const _keyValuePair = _tempArray[i].split('=');
      if (_keyValuePair[0] === param) {
        return _keyValuePair[1];
      }
    }
  };

  componentWillMount() {
    const token = this.getQuerystring('token');
    const { getInfo } = this.props;

    if (token) {
      getInfo(token).then(() => {
        setTimeout(() => {
          this.props.history.push({ pathname: '/' });
        }, 1000);
      });
    }
  }

  render() {
    return (
      <div>
        Successfully Authenticated.
      </div>
    );
  }
}

export default connect(Oauth.store, { getInfo })(Oauth);