import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from './types/types';
import { add, selectList } from './reducers/todoList';
import TodoItem from './component/todoItem';

function App() {
  const [textInput, setTextInput] = useState<RootState>({
    id: 0,
    text: '',
    completedStatus: false,
  });
  const selectedList = useSelector(selectList);
  const dispatch = useDispatch();

  const onSubmit = (e: React.FormEvent) => {
    dispatch(add(textInput));
    setTextInput((state) => ({ ...state, id: state.id + 1, text: '' }));
    e.preventDefault();
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setTextInput((state) => ({ ...state, text: value }));
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input onChange={onChange} value={textInput.text}></input>
        <button type="submit">추가</button>
      </form>
      {selectedList.map((data: any, index: number) => (
        <TodoItem key={index} value={data} />
      ))}
    </div>
  );
}

export default App;
