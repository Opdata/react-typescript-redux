import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../types/types';

const initialState: Array<RootState> = [];

const todoList = createSlice({
  name: 'todoList',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(action.payload);
    },

    complete: (state, action) => {
      state[action.payload.index].completedStatus = !state[action.payload.index]
        .completedStatus;
    },

    deleteItem: (state, action) => {
      state.splice(action.payload.index, 1);
    },
  },
});

export const { add, complete, deleteItem } = todoList.actions;

export const selectList = (state: any) => state.todoList;

export default todoList.reducer;
