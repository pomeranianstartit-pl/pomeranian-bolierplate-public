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
  const [text1, setText1] = useState('');
  const [counter1, setCounter1] = useState(0);
  const [click1, handleClick1] = useState(true);

  function handleOnClick1() {
    setText1('Kliknięto!');
  }

  useEffect(() => {
    const zniknij = setTimeout(() => {
      setText1('');
    }, 3000);

    return () => clearTimeout(zniknij);
  });
  // useEffect(() => {
  //   const interval1 = setInterval(() => {
  //     setCounter1((counter1) => counter1 + 1);
  //   }, 1000);
  //   return () => clearInterval(interval1);
  // }, []);

  function handleOnCounting() {
    handleClick1(!click1);
    if (click1 === false) {
      return nowaF;
    }

    const interval1 = setInterval(() => {
      setCounter1((counter1) => counter1 + 1);
    }, 1000);

    return () => clearInterval(interval1);
  }
  const nowaF = click1 ? { counter1 } : '0';
  useEffect(() => {});
  // useEffect(() => {
  //   const interval = setCounter1(() => {
  //     setCounter1(counter1 + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [counter1]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setIntevalCount(intervalCount + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, [intervalCount]);
  // powyzszy kod zostal wykomentowany tylko ze wzgledu by sie nie wykonywal, jest poprawny
  return (
    <div>
      {intervalCount}
      <br />
      <p>Zadanie 1</p>

      <button onClick={handleOnClick1}>Button</button>
      {text1}
      <br />
      <p>Zadanie 2</p>
      <div>Timer: {counter1} sec</div>
      <button onClick={handleOnCounting}>start/stop</button>
      <button>restart</button>
    </div>
  );
};
