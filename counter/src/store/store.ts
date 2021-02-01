import { configureStore } from '@reduxjs/toolkit';
import { counterSlice } from '../reducers/counts';

export const store = configureStore({
  reducer: { counter: counterSlice.reducer },
});
