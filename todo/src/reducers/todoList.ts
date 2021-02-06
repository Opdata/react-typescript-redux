import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './todoItem';

const initialState: Array<RootState | undefined> = [];

const todoList = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },

    complete: (state) => {
      // console.log(state);
    },
  },
});

export const { add, complete } = todoList.actions;

export const selectList = (state: any) => state.todoList;

export default todoList.reducer;
