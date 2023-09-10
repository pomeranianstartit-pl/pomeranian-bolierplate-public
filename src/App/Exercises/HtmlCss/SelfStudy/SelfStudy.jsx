import './styles.css';
import { useEffect, useState } from 'react';

function add(name, age) {
  console.log (`Cześć, mam na imię ${name} i mam ${age} lat.`);
}

add('Edyta', 26)

const days = ['poniedziałek', 'wtorek', 'środa']

const days2 = days.forEach(function (day)
{console.log(day)})

const days3 = days.forEach((day) => console.log(day))


export const SelfStudy = () => {
  const [value, setValue] = useState(0);
  const [counter, setCounter] = useState(0);
  const [timeoutId, setTimeoutId] = useState();
  const [intervalId, setIntervalId] = useState();
  const [message, setMessage] = useState('');
  const handleOnClick = () => {
    clearTimeout(timeoutId);
    const id = setTimeout(() => setValue((prevValue) => prevValue + 1), 2000);
    setTimeoutId(id);
  };

  useEffect(() => {
    console.log('wykonano useEffect', value);
  }, [value]);

  useEffect(() => {
    /// ...
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  useEffect(() => {
    /// ...
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  useEffect(() => {
    const id = setTimeout(() => setMessage('Hello !!!'), 3000);
    return () => clearTimeout(id);
  }, []);

  const handleCounter = () => {
    // if (intervalId) return;
    clearInterval(intervalId);
    const id = setInterval(() => {
      console.log('ustawiam counter na + 1');
      setCounter((prevValue) => prevValue + 1);
    }, 1000);
    setIntervalId(id);
  };

  const handleStopCounter = () => {
    clearInterval(intervalId);
    // setIntervalId(undefined);
  };

const SelfStudy = () => {
  return <div className= 'timer'>
    <span className='timer_part_minutes'>00</span>
    <span className='timer_part_colon'>:</span>
    <span className='timer_part_seconds'>00</span>
    <button type= 'button' class='timer_button'>Start</button>
  </div>;
};
};


