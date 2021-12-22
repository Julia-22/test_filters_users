import { configureStore } from '@reduxjs/toolkit';
import users from './reducer';

const store = configureStore({
  reducer: {
    users,
  }
});

export default store;