import { useEffect, useState } from 'react';
import './styles.css';
import { ApiSymulationSucces } from '../Exercise-js-promises/ApiSymulationSucces/ApiSymulationSucces';

export function Exercise() {
  const [getMessage, setMessage] = useState('');
  const [getCount, setCount] = useState(0);

  useEffect(() => {
    const myPromise = new Promise((resolve) => {
      setTimeout(() => {
        resolve("I'm resolved :)");
      }, 5000);
    });

    myPromise
      .then((result) => {
        setMessage(result);
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [getCount]);

  const handleIncrementing = () => setCount(getCount + 1);

  return (
    <div className="js-promises-with-use-effect">
      <button onClick={handleIncrementing}>Click Me!!</button>
      <p>{getMessage} </p>
      <div>
        <ApiSymulationSucces />
      </div>
    </div>
  );
}
