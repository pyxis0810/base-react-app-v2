import React, { Component } from 'react';
import { connect } from 'react-redux';

import { signOut } from 'actions/auth';

class SignOut extends Component {
  componentWillMount() {
    const { signOut } = this.props;

    signOut();
    setTimeout(() => {
      this.props.history.push({ pathname: '/' });
    }, 1000);
  }

  render() {
    return (
      <div>Signed out.</div>
    );
  }
}

export default connect(null, { signOut })(SignOut);