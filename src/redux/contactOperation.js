import action from './contactActions';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContact = () => dispatch => {
  dispatch(action);
};

export const addContact = ({ name, number }) => dispatch => {
  const newContact = { name, number };
  dispatch(action.addContactRequest());
  axios
    .post('/contacts', newContact)
    .then(({ data }) => dispatch(action.addContactSuccess(data)))
    .catch(error => dispatch(action.addContactError(error)));
};

export const deleteContact = ({ name, number }) => dispatch => {
  const newContact = { name, number };
  dispatch(action.addContactRequest());
  axios
    .post('/contacts', newContact)
    .then(({ data }) => dispatch(action.addContactSuccess(data)))
    .catch(error => dispatch(action.addContactError(error)));
};
