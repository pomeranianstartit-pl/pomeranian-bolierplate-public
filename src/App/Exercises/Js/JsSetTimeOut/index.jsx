import { useState } from 'react';

export const JsSetTimeOut = () => {
  const [text, setText] = useState('Hello World');

  const test = setTimeout(() => {
    console.log('setTimeout');
    setText('Hello World 2');
  }, 3000);

  clearTimeout(test);
  return <div>Timeout</div>;
};
