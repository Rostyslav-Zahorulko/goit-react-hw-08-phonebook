import axios from 'axios';

import { authActions } from '../auth';

axios.defaults.baseURL = 'https://goit-phonebook-api.herokuapp.com';

const {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
} = authActions;

const register = credentials => async dispatch => {
  dispatch(registerRequest());

  try {
    const response = await axios.post('/users/signup', credentials);

    dispatch(registerSuccess(response.data));
  } catch (error) {
    console.log('error: ', error);
    dispatch(registerError(error.message));
  }
};

const logIn = credentials => async dispatch => {
  dispatch(loginRequest());

  try {
    const response = await axios.post('/users/login', credentials);

    dispatch(loginSuccess(response.data));
  } catch (error) {
    dispatch(loginError(error.message));
  }
};

const authOperations = {
  register,
  logIn,
};

export default authOperations;
