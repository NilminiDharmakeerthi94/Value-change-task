import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/creweq/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
