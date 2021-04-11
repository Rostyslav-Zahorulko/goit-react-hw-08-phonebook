import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/register" exact>
            Register
          </NavLink>
        </li>
        <li>
          <NavLink to="/login" exact>
            Login
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default AuthNav;
