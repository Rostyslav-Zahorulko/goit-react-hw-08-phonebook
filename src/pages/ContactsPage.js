import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import Container from '../components/Container';
import ContactGenerationForm from '../components/ContactGenerationForm';
import ContactFilter from '../components/ContactFilter';
import ContactList from '../components/ContactList';
import { contactsSelectors, contactsOperations } from '../redux/contacts';

class App extends Component {
  static propTypes = {
    isLoading: PropTypes.bool.isRequired,
    fetchContacts: PropTypes.func.isRequired,
  };

  componentDidMount() {
    this.props.fetchContacts();
  }

  render() {
    const { isLoading } = this.props;

    return (
      <Container>
        <h1 className="app-title">Phonebook</h1>

        <ContactGenerationForm />

        <h2 className="section-title">Contacts</h2>

        <ContactFilter />

        <ContactList />

        {isLoading && (
          <Loader type="ThreeDots" color="#00BFFF" width={100} height={100} />
        )}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: contactsSelectors.getIsLoading(state),
});

// const mapDispatchToProps = dispatch => ({
//   fetchContacts: () => dispatch(contactsOperations.fetchContacts()),
// });

const mapDispatchToProps = {
  fetchContacts: contactsOperations.fetchContacts,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
