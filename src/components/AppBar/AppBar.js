import { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { authSelectors } from '../../redux/auth';

import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';

import './AppBar.scss';

class AppBar extends Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <header className="AppBar">
        <NavLink
          className="AppBar__Link"
          activeClassName="AppBar__ActiveLink"
          to="/contacts"
          exact
        >
          Contacts
        </NavLink>

        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </header>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
