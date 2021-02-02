import { useSelector } from 'react-redux';
import { add, complete } from './reducers/todoList';
import { input, submit, status } from './reducers/todoItem';

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

  return (
    <div>
      <form>
        <input></input>
        <button>추가</button>
      </form>
    </div>
  );
}

export default App;
