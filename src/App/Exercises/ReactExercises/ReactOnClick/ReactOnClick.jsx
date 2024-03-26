import { useState } from 'react';
import './styles.css';

export const ReactOnClick = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(0);
  const [value, setValue] = useState('');

  const text = isClicked ? 'Kliknięte' : 'Nie kliknięte';

  function handleClick() {
    setValue('');
    setIsClicked(!isClicked);
    setCount(count + 1);
    setIsClicked(!isClicked);
  }
  function handleChange(event) {
    setValue(event.target.value);
  }
};
