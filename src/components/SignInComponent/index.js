import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signIn, googleAuth, facebookAuth, unmountAuth } from 'actions/auth';

class SignInComponent extends Component {
  static store(state) {
    return {
      errorMessage: state.auth.error
    };
  }

  componentWillUnmount() {
    const { unmountAuth } = this.props;

    unmountAuth();
  }

  handleGoogleAuth = (e) => {
    const { googleAuth } = this.props;

    googleAuth();
  };

  handleFacebookAuth = () => {
    const { facebookAuth } = this.props;

    facebookAuth();
  };

  render() {
    return (
      <div>
        <button onClick={this.handleGoogleAuth}>Google ID로 로그인</button>
        <button onClick={this.handleFacebookAuth}>Facebook ID로 로그인</button>
      </div>
    );
  }
}

export default connect(SignInComponent.store, { signIn, googleAuth, facebookAuth, unmountAuth })(SignInComponent);