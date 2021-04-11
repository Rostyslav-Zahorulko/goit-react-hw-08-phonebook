import { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import RegisterPage from './pages/RegisterPage';
import LoginPage from './pages/LoginPage';
import ContactsPage from './pages/ContactsPage';

import Container from './components/Container';
import AppBar from './components/AppBar';

class App extends Component {
  render() {
    return (
      <Container>
        <AppBar />

        <Switch>
          <Route exact path="/register" component={RegisterPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/contacts" component={ContactsPage} />
        </Switch>
      </Container>
    );
  }
}

export default App;
