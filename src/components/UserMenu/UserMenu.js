import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import defaultUserAvatar from './default-user-avatar.svg';
import './UserMenu.scss';
import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = ({ avatar, email, onLogout }) => (
  <div className="UserMenu">
    <img
      className="UserMenu__Avatar"
      src={avatar}
      alt="User avatar"
      width="32"
    />
    <span className="UserMenu__Name">Welcome, {email}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

UserMenu.propTypes = {
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  avatar: defaultUserAvatar,
  email: authSelectors.getUserEmail(state),
});

// const mapDispatchToProps = dispatch => ({
//   onLogout: () => dispatch(authOperations.logOut()),
// });

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
