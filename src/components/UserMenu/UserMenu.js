import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import defaultAvatar from './default-avatar.png';
import './UserMenu.scss';
import { authSelectors, authOperations } from '../../redux/auth';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className="UserMenu">
    <img className="UserMenu__Avatar" src={avatar} alt="" width="32" />
    <span className="UserMenu__Name">Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

UserMenu.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onLogout: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  avatar: defaultAvatar,
  name: authSelectors.getUsername(state),
});

// const mapDispatchToProps = dispatch => ({
//   onLogout: () => dispatch(authOperations.logOut()),
// });

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
