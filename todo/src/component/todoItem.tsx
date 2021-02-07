import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types/types';
import { complete, deleteItem, selectList } from '../reducers/todoList';

const TodoItem = ({ index, value }: { index: number; value: RootState }) => {
  const dispatch = useDispatch();
  const selectedList = useSelector(selectList);

  const onCompleted = () => {
    dispatch(complete({ index }));
  };

  const onRemove = () => {
    dispatch(deleteItem({ selectedList, index }));
  };

  return (
    <li
      style={{
        listStyle: 'none',
        textDecoration: value.completedStatus ? 'line-through' : 'none',
      }}
    >
      <input type="checkbox" checked={value.completedStatus} readOnly></input>
      <b>{value.text}</b>
      <button style={{ marginLeft: '10px' }} onClick={onCompleted}>
        완료
      </button>
      <button style={{ marginLeft: '10px' }} onClick={onRemove}>
        삭제
      </button>
    </li>
  );
};

export default TodoItem;
