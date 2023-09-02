import { PromisyExample1 } from './PromisyExample1';
import { PromisyExample2 } from './PromisyExample2';
import { TryCatchFinally } from './TryChatchFinally';
import { PromiseExcercise } from './PromiseExcercise';
import { AsyncAwaitExample1 } from './AsyncAwaitExample1';
import { AsyncAwaitExample2 } from './AsyncAwaitExample2';
import { AsyncAwaitExercise1 } from './AsyncAwaitExercise1';
import './styles.css';
import { AsyncAwaitExercise2 } from './AsyncAwaitExercise2';
import { PromiseMethods } from './PromiseMethods';

export const AsyncAwaitExercise = () => {
  return (
    <div>
      <h1>Async, Await, Promise methods</h1>
      <h2>Powtórka z poprzednich zajęć</h2>
      <PromisyExample1 />
      <PromisyExample2 />
      <TryCatchFinally />
      <PromiseExcercise />
      <h2>Async Await</h2>
      <AsyncAwaitExample1 />
      <AsyncAwaitExample2 />
      <AsyncAwaitExercise1 />
      <AsyncAwaitExercise2 />
      <PromiseMethods />
    </div>
  );
};
