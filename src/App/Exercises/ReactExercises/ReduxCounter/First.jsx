import { useDispatch, useSelector } from 'react-redux';
import './styles.css';
import { increment, incrementBy } from '../../../Store/counterSlice';

export const First = () => {
  const value = useSelector((store) => store.counterSlice.value);
  const dispatch = useDispatch();
  return (
    <div className="redux-component">
      <h2>First </h2>
      <button className="redux-button" onClick={() => dispatch(increment())}>
        Dodaj 1
      </button>
      <button className="redux-button" onClick={() => dispatch(incrementBy(5))}>
        Dodaj 5
      </button>
      <button
        className="redux-button"
        onClick={() => dispatch(incrementBy(10))}
      >
        Dodaj 10
      </button>
      <div>Value: {value}</div>
    </div>
  );
};
