import { createSlice } from '@reduxjs/toolkit';

const initialState: any = [];

const todoList = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    add: (state, payload) => {
      state.push(payload);
    },

    complete: (state) => {
      console.log(state);
    },
  },
});

export const { add, complete } = todoList.actions;

export default todoList.reducer;
