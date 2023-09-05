import { First } from './First';
import { ReduxStealer } from './ReduxStealer';
import './styles.css';

export const ReduxCounter = () => {
  return (
    <div>
      <h1>Redux Counter</h1>
      <div className="redux-container">
        <First />
        <ReduxStealer />
      </div>
    </div>
  );
};
