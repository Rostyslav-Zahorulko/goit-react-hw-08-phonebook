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
          >
            Register
          </NavLink>
        </li>
        <li className="AuthNav__Item">
          <NavLink
            className="AuthNav__Link"
            activeClassName="AuthNav__ActiveLink"
            to="/login"
          >
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
