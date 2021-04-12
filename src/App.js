import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';

import Container from './components/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import { authOperations } from './redux/auth';

class App extends Component {
  componentDidMount() {
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <PublicRoute
            path="/register"
            restricted
            component={RegisterPage}
            redirectTo="/contacts"
          />
          <PublicRoute
            path="/login"
            restricted
            component={LoginPage}
            redirectTo="/contacts"
          />
          <PrivateRoute
            path="/contacts"
            component={ContactsPage}
            redirectTo="/login"
          />
        </Switch>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
