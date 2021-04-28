import { connect } from 'react-redux'; // Импорт функции коннекта к хранилищу
import { addContact } from '../../redux/contactOperations';
import { getContacts } from '../../redux/contactSelectors';

import Form from './Form';

const mapStateToProps = state => ({
  contacts: getContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmitForm: (name, number) => dispatch(addContact(name, number)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
