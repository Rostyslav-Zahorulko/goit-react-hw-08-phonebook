import { NavLink } from 'react-router-dom';

import './AuthNav.scss';

const AuthNav = () => {
  return (
    <nav className="AuthNav">
      <ul className="AuthNav__List">
        <li className="AuthNav__Item">
          <NavLink
            className="AuthNav__Link"
            activeClassName="AuthNav__ActiveLink"
            to="/register"
            exact
          >
            Register
          </NavLink>
        </li>
        <li className="AuthNav__Item">
          <NavLink
            className="AuthNav__Link"
            activeClassName="AuthNav__ActiveLink"
            to="/login"
            exact
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
