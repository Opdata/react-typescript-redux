import { useDispatch, useSelector } from 'react-redux';
import { increment, decrement, selectCount } from './reducers/counts';

function App() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  return (
    <div>
      <b>{count}</b>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
    </div>
  );
}

export default App;
