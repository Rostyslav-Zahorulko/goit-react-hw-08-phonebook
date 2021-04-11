import { Component } from 'react';
import { NavLink } from 'react-router-dom';

import AuthNav from '../AuthNav';

class AppBar extends Component {
  render() {
    return (
      <header>
        <AuthNav />

        <NavLink to="/contacts" exact>
          Contacts
        </NavLink>
      </header>
    );
  }
}

export default AppBar;
