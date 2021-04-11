import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
// import { Notification } from 'react-pnotify';

import Container from '../components/Container';
import ContactForm from '../components/ContactForm';
import Filter from '../components/Filter';
import ContactList from '../components/ContactList';

import { contactsSelectors, contactsOperations } from '../redux/contacts';

class App extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    error: PropTypes.string.isRequired,
    fetchContacts: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    // const { error, isLoading } = this.props;
    const { isLoading } = this.props;

    return (
      <Container>
        <h1 className="app-title">Phonebook</h1>

        <ContactForm />

        <h2 className="section-title">Contacts</h2>

        <Filter />

        <ContactList />

        {isLoading && (
          <Loader type="ThreeDots" color="#00BFFF" width={100} height={100} />
        )}

        {/* {error && <Notification type="error" title={error} delay={2000} />} */}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getLoading(state),
  error: contactsSelectors.getError(state),
});

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
