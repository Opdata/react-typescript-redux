import { configureStore } from '@reduxjs/toolkit';
import todoItem from '../reducers/todoItem';
import todoList from '../reducers/todoItem';

const store = configureStore({
  reducer: {
    todoItem: todoItem,
    todo: todoList,
  },
});

export default store;
