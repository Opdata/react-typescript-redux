import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { add, complete, selectList } from './reducers/todoList';
import { RootState, submit, selectItem } from './reducers/todoItem';
import TodoItem from './component/todoItem';

/**
 * todoItem
 * @property input
 * @property submit
 * @property status
 */

/**
 * todoList
 * @property add
 * @property complete
 */

function App() {
  const [item, setItem] = useState<string>('');
  const selectedList = useSelector(selectList);
  const dispatch = useDispatch();
  const getItem = useSelector(selectItem);

  const onSubmit = (e: React.FormEvent) => {
    dispatch(submit(item));
    dispatch(add(getItem));
    setItem('');
    e.preventDefault();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setItem(value);
  };

  return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input onChange={(e) => onChange(e)} value={item}></input>
        <button type="submit">추가</button>
      </form>
      {selectedList.map((data: any, index: number) => (
        <TodoItem key={index} value={data} />
      ))}
    </div>
  );
}

export default App;
