import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  id: 0,
  text: '',
  completedStatus: false,
};

const todoItem = createSlice({
  name: 'todoItem',
  initialState,
  reducers: {
    input: (state, action) => {
      state.text = action.payload;
    },

    submit: (state) => {
      state.id = state.id + 1;
    },

    status: (state) => {
      state.completedStatus = !state.completedStatus;
    },
  },
});

export const { input, submit, status } = todoItem.actions;

export default todoItem.reducer;
