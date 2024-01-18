import { useEffect, useState } from 'react';
import { FakeDataPromise } from './FakeDataPromise';
import { ApiSimulation } from './ApiSimulation';

const simplePromise = new Promise((resolve, reject) => {
  resolve('I am resolved');
});

console.log(simplePromise, 'simplePromise');

export const Exercise = () => {
  const [text, setText] = useState('I am text');

  useEffect(() => {
    simplePromise.then((data) => {
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
