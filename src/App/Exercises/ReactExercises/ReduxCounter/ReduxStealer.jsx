import './styles.css';
import { useDispatch, useSelector } from 'react-redux';
import { decrementBy, resetError } from '../../../Store/counterSlice';
import { useEffect } from 'react';

export const ReduxStealer = () => {
  const error = useSelector((store) => store.counterSlice.error);
  const dispatch = useDispatch();

  useEffect(() => {
    if (error.length > 0) {
      setTimeout(() => {
        dispatch(resetError());
      }, 2000);
    }
  }, [error]);
  return (
    <div className="redux-component">
      <h2>Redux Stealer</h2>

      <button
        className="redux-button"
        onClick={() => dispatch(decrementBy(-7))}
      >
        Odejmij 7
      </button>
      <button
        className="redux-button"
        onClick={() => dispatch(decrementBy(-14))}
      >
        Odejmij 14
      </button>
      <div>{error && error.length > 0 ? error : ''}</div>
    </div>
  );
};
