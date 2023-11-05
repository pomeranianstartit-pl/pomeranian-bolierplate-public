import { useEffect, useState } from 'react';
import { FakeDataPromise } from './FakeDataPromise';
import { ApiSimulation } from './ApiSimulation';

const myPromise = new Promise((res, rej) => {
  res("I'm resolved");
});

export const PromiseExercise = () => {
  const [text, setText] = useState('I am text');

  useEffect(() => {
    myPromise.then((data) => {
      setText(data);
    });
  }, []);

  return (
    <div>
      {text}
      <FakeDataPromise />
      <ApiSimulation />
    </div>
  );
};
