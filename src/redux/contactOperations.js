import {
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactError,
  deleteContactSuccess,
  fetchContactError,
  fetchContactSuccess,
  fetchContactRequest,
} from './contactActions';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:4040';

export const fetchContact = () => dispatch => {
  dispatch(fetchContactRequest());
  axios
    .get('/contacts')
    .then(({ data }) => dispatch(fetchContactSuccess(data)))
    .catch(error => dispatch(fetchContactError(error)));
};

export const addContact = ({ name, number }) => dispatch => {
  const newContact = { name, number };
  dispatch(addContactRequest());
  axios
    .post('/contacts', newContact)
    .then(({ data }) => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = idContact => dispatch => {
  dispatch(deleteContactRequest());
  axios
    .delete(`/contacts/${idContact}`)
    .then(() => dispatch(deleteContactSuccess(idContact)))
    .catch(error => dispatch(deleteContactError(error)));
};
