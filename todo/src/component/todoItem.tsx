import { add, complete } from '../reducers/todoList';
import { input, submit, status } from '../reducers/todoItem';

function todoItem({ text, completedStatus }: any) {
  const onCompleted = () => {
    // Status Complted Function
  };
  const onRemove = () => {
    // List Delete Function
  };

  return (
    <li
      style={{
        listStyle: 'none',
        textDecoration: completedStatus ? 'line-through' : 'none',
      }}
    >
      <input type="checkbox" checked={completedStatus}></input>
      <b>{text}</b>
      <button style={{ marginLeft: '10px' }} onClick={onCompleted}>
        완료
      </button>
      <button style={{ marginLeft: '10px' }} onClick={onRemove}>
        삭제
      </button>
    </li>
  );
}

export default todoItem;
