import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../types/types';

const initialState: RootState = {
  id: 0,
  text: '',
  completedStatus: false,
};

const todoItem = createSlice({
  name: 'todoItem',
  initialState,
  reducers: {
    submit: (state, action) => {
      state.id = state.id++;
      state.text = action.payload;
    },
  },
});

export const { submit } = todoItem.actions;

export const selectItem = (state: any) => state.todoItem;

export default todoItem.reducer;
