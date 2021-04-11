import axios from 'axios';

import { authActions } from '../auth';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const { registerRequest, registerSuccess, registerError } = authActions;

const register = credentials => async dispatch => {
  dispatch(registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerError(error.message));
  }
};

const authOperations = {
  register,
};

export default authOperations;
