import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  static store(state) {
    return {
      authenticated: state.auth.authenticated
    };
  }

  renderButtons = () => {
    const { authenticated } = this.props;

    if(authenticated) {
      return (
        <li className="nav-item">
          <Link to="/signout" className="nav-link">로그아웃</Link>
        </li>
      );
    } else {
      return ([
        <li className="nav-item" key={1}>
          <Link to="/signin" className="nav-link">로그인</Link>
        </li>,
        <li className="nav-item" key={2}>
          <Link to="/signup" className="nav-link">회원가입</Link>
        </li>
      ]);
    }
  };

  render() {
    return (
      <div>
        <div>Header</div>
        <div>{this.renderButtons()}</div>
      </div>
    );
  }
}

export default connect(Header.store, {})(Header);