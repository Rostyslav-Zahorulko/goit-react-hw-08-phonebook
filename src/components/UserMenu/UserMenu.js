import React from 'react';
import { connect } from 'react-redux';

import defaultAvatar from './default-avatar.png';

import { authSelectors, authOperations } from '../../redux/auth';

import './UserMenu.scss';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className="UserMenu">
    <img className="UserMenu__Avatar" src={avatar} alt="" width="32" />
    <span className="UserMenu__Name">Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);

const mapStateToProps = state => ({
  avatar: defaultAvatar,
  name: authSelectors.getUsername(state),
});

// const mapDispatchToProps = {
//   onLogout: authOperations.logOut,
// };

export default connect(mapStateToProps, null)(UserMenu);
