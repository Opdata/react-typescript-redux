import { configureStore } from '@reduxjs/toolkit';
import todoItem from '../reducers/todoItem';
import todoList from '../reducers/todoList';

const store = configureStore({
  reducer: {
    todoItem: todoItem,
    todoList: todoList,
  },
});

export default store;
