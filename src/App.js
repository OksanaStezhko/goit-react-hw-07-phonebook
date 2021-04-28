import React, { Component } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';
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
    const { isLoading, isError } = this.props;
    return (
      <Container>
        <h1>Phonebook</h1>
        <Form />
        <Filter />
        <h2>Contacts</h2>
        {isError && <h2>{isError}</h2>}
        {isLoading && (
          <Loader type="ThreeDots" color="#6a99cf" height={80} width={80} />
        )}
        <ContactList />
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  isLoading: state.contacts.loading,
  isError: state.contacts.error,
});
const mapDispatchToProps = dispatch => {
  return {
    fetchContact: () => dispatch(fetchContact()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);
