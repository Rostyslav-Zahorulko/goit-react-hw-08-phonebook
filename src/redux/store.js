import { configureStore } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { contactsReducer } from './contacts';
import { authReducer } from './auth';

const middleware = getDefaultMiddleware =>
  getDefaultMiddleware().concat(logger);

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
  middleware,
});

export default store;
