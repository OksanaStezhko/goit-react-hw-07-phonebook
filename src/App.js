import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from './components/Container';
import Form from './components/Form';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { fetchContact } from './redux/contactOperations';

class App extends Component {
  componentDidMount() {
    this.props.fetchContact();
  }

  render() {
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form />
        <Filter />
        <h2>Contacts</h2>
        <ContactList />
      </Container>
    );
  }
}
const mapDispatchToProps = dispatch => {
  return {
    fetchContact: () => dispatch(fetchContact()),
  };
};
export default connect(null, mapDispatchToProps)(App);
