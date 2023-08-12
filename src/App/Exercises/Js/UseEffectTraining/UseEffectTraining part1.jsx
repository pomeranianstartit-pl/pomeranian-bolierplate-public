import './styles.css';
import { useEffect, useState } from 'react';

export const UseEffectTraining = () => {
  const [number, setNumber] = useState(0);
  const [name, setName] = useState();

  useEffect(() => {
    console.log('useEffect runs');
    document.title = `You clicked ${number} times`;
  }, [number]);
  console.count('render');
  return (
    <div>
      {/* <h1>slider</h1>
      <img
        src="https://i.postimg.cc/vHFNx9MC/2023-05-11-16-
48-30.gif"
        alt="przykład"
        width={400}
      /> */}
      <button onClick={() => setNumber((prev) => prev + 1)}>Increase</button>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <p>{name}</p>
      <p>You clicked {number} times</p>
    </div>
  );
};
