import { useEffect, useState } from 'react';

export const MyWorkplace = () => {
  const [text, setText] = useState('makarena');
  const [inputText, setInputText] = useState('');
  const [valInput, setValInput] = useState([]);
  const [timeoutId, setTimeoutId] = useState();

  const clickHandler = () => {
    setText(inputText);
  };

  const handleStart = () => {
    const timeout = setTimeout(() => {
      setText('Upłynęła sekunda');
    }, 1000);
    setTimeoutId(timeout);
  };

  // const myTimer = () => {
  //   setTimeout(() => {
  //     setText('');
  //   }, 1500);
  // };

  useEffect(() => {
    setValInput((prevValInput) => {
      if (inputText === '') {
        return prevValInput;
      }
      console.log([...prevValInput, inputText], 'LISTA'.padStart(25, '*'));
      return [...prevValInput, inputText];
    });
  }, [text]);

  return (
    <div>
      <label>This is page where I train some functionalities</label> <br />
      <input
        type="text"
        placeholder="wpisz wartość"
        autoFocus="True"
        onChange={(event) => setInputText(event.target.value)}
        value={inputText}
      />
      <br />
      <button onClick={clickHandler}>Dodaj do listy</button>
      <p>{text}</p>
    </div>
  );
};
