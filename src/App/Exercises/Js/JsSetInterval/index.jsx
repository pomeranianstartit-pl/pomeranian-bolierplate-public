import React, { useState, useEffect } from 'react';

export const JsSetInterval = () => {
  const [count, setCount] = useState(0);

  const [text, setText] = useState('Hello World');

  // setInterval(() => {
  //   console.log('setInterval');
  //   setCount(count + 1);
  // }, 1000);

  const handleClickCount = () => {
    setCount(count + 1);
  };

  const handleClickText = () => {
    setText('Hello New World');
  };

  // 1. useEffect wykona się zawsze po zmianie/renderze komponetu

  // useEffect(() => {
  //   console.log('useEffect');
  // });

  // 2. useEffect wykona się tylko raz po załadowaniu komponentu

  // useEffect(() => {
  //   console.log('useEffect - []');
  // }, []);

  // 3. useEffect wykona się tylko i wyłącznie jeżeli nastąpi zmiana np count (nasłuchuje zmiany count)

  useEffect(() => {
    console.log('useEffect - [count]');
  }, [count]);

  useEffect(() => {
    console.log('useEffect - [text]');
  }, [text]);

  // 4. useEffect wykona się tylko i wyłącznie jeżeli nastąpi zmiana np count lub text (nasłuchuje zmiany count i text)

  useEffect(() => {
    console.log('useEffect - [count, text]');
  }, [count, text]);

  return (
    <div>
      <div onClick={handleClickCount}>{count}</div>
      <div onClick={handleClickText}>{text}</div>

      <ReactInterval />
    </div>
  );
};

const ReactInterval = () => {
  const [intervalCount, setIntevalCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIntevalCount(intervalCount + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [intervalCount]);

  return <div>{intervalCount}</div>;
};
