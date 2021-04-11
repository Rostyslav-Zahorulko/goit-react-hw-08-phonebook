import { Component } from 'react';
import { connect } from 'react-redux';
import { authOperations, authReducer } from '../redux/auth';

const styles = {
  form: {
    width: 320,
  },

  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

class LoginPage extends Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onLogin(this.state);

    this.setState({ name: '', email: '', password: '' });
  };

  render() {
    const { email, password } = this.state;

    return (
      <div>
        <h1>Login page</h1>

        <form
          onSubmit={this.handleSubmit}
          style={styles.form}
          autoComplete="off"
        >
          <label style={styles.label}>
            Email
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleChange}
            />
          </label>

          <label style={styles.label}>
            Password
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleChange}
            />
          </label>

          <button type="submit">Enter</button>
        </form>
      </div>
    );
  }
}

// const mapDispatchToProps = {
//   onLogin: authOperations.logIn,
// };

const mapDispatchToProps = dispatch => ({
  onLogin: data => dispatch(authOperations.logIn(data)),
});

export default connect(null, mapDispatchToProps)(LoginPage);
