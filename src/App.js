import { Component, Suspense, lazy } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';

import Container from './components/Container';
import AppBar from './components/AppBar';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import { authOperations } from './redux/auth';

const RegisterPage = lazy(() =>
  import('./pages/RegisterPage' /* webpackChunkName: "register-page" */),
);

const LoginPage = lazy(() =>
  import('./pages/LoginPage' /* webpackChunkName: "login-page" */),
);

const ContactsPage = lazy(() =>
  import('./pages/ContactsPage' /* webpackChunkName: "contacts-page" */),
);

class App extends Component {
  componentDidMount() {
    console.log('Hello from App componentDidMount');
    this.props.onGetCurrentUser();
  }

  render() {
    return (
      <Container>
        <AppBar />

        <Suspense fallback={<div>Loading...</div>}>
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
        </Suspense>
      </Container>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  onGetCurrentUser: () => dispatch(authOperations.getCurrentUser()),
});

export default connect(null, mapDispatchToProps)(App);
