import { useSelector } from 'react-redux';
import { add, complete, selectedList } from './reducers/todoList';
import { input, submit, status } from './reducers/todoItem';
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
  // onclick, onsubmit

  const selectListed: Array<object> = useSelector(selectedList);

  const onSubmit = () => {
    //
  };

  const onClickItem = () => {
    //
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input></input>
        <button onClick={onClickItem}>추가</button>
      </form>
      {selectListed &&
        selectListed.map((value: any, index: number) => (
          <TodoItem key={index} value={value} />
        ))}
    </div>
  );
}

export default App;
