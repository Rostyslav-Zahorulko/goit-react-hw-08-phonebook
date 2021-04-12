import { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import AuthNav from '../AuthNav';
import UserMenu from '../UserMenu';
import './AppBar.scss';
import { authSelectors } from '../../redux/auth';

class AppBar extends Component {
  render() {
    const { isAuthenticated } = this.props;

    return (
      <header className="AppBar">
        {isAuthenticated && (
          <NavLink
            className="AppBar__Link"
            activeClassName="AppBar__ActiveLink"
            to="/contacts"
          >
            Contacts
          </NavLink>
        )}

        {isAuthenticated ? <UserMenu /> : <AuthNav />}
      </header>
    );
  }
}

AppBar.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
};

const mapStateToProps = state => ({
  isAuthenticated: authSelectors.getIsAuthenticated(state),
});

export default connect(mapStateToProps)(AppBar);
