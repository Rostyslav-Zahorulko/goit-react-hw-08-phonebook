import { createReducer } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import { authActions } from '../auth';

const { registerRequest, registerSuccess, registerError } = authActions;

const initialUserState = { name: null, email: null };

const userReducer = createReducer(initialUserState, {
  [registerSuccess]: (_, { payload }) => payload.user,
});

const tokenReducer = createReducer(null, {
  [registerSuccess]: (_, { payload }) => payload.token,
});

const errorReducer = createReducer(null, {
  [registerError]: (_, { payload }) => payload,
});

const authReducer = combineReducers({
  user: userReducer,
  token: tokenReducer,
  error: errorReducer,
});

export default authReducer;
