import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './ContactForm.scss';
import { contactsSelectors, contactsOperations } from '../../redux/contacts';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  static propTypes = {
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
    ).isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  handleInputChange = event => {
    const { name, value } = event.currentTarget;

    this.setState({ [name]: value });
  };

  handleFormSubmit = event => {
    const { name, number } = this.state;
    const { contacts, onSubmit } = this.props;

    event.preventDefault();

    const existedContactWithTheSameName = contacts.find(
      contact => contact.name === name,
    );

    if (existedContactWithTheSameName !== undefined) {
      alert(`${name} is already in contacts`);
      return;
    }

    onSubmit(name, number);

    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className="form" onSubmit={this.handleFormSubmit}>
        <label className="form-field">
          Name
          <input
            className="form-input"
            type="text"
            name="name"
            value={name}
            required
            placeholder="John Smith"
            onChange={this.handleInputChange}
          ></input>
        </label>

        <label className="form-field">
          Number
          <input
            className="form-input"
            type="tel"
            name="number"
            value={number}
            required
            placeholder="111-11-11"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
            onChange={this.handleInputChange}
          ></input>
        </label>

        <button className="add-contact-button">Add contact</button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  contacts: contactsSelectors.getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) =>
    dispatch(contactsOperations.addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
