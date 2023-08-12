import './styles.css';
import { useEffect, useState } from 'react';

export const Timer = () => {
  const [number, setNumber] = useState(0);
  // const [toggle, setToggle] = useState();

  useEffect(() => {
    let id = setInterval(() => setNumber((prev) => prev + 1), 1000);
    return () => clearInterval(id);
  }, []);

  // useEffect(() => {
  //   console.log('useEffect runs');
  //   return () => console.log('clean up');
  // }, [toggle]);

  return (
    <div>
      <h1>Timer</h1>
      <p>{number}</p>
      {/* <button onClick={() => setToggle(!toggle)}>Toggle</button> */}
    </div>
  );
};
