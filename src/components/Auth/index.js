import React, { Component } from 'react';
import { connect } from 'react-redux';

module.exports = (ComposedComponent) => {
  class Authentication extends Component {
    static store(state) {
      return {
        authenticated: state.auth.authenticated
      };
    }

    componentWillMount() {
      if (!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      return <ComposedComponent {...this.props} />
    }
  }

  return connect(Authentication.store)(Authentication);
}