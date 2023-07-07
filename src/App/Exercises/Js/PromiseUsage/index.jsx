import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';

export function Exercise() {
  const [data, setData] = useState();
  const getJokes = async () => {
    try {
      const response = await fetch(`https://api.chucknorris.io/jokes/random`);
      console.log('Response before .json():', response);
      const data = await response.json();
      console.log('Response after .json():', data);
      const joke = data;

      setData(joke);
    } catch (err) {
      console.log(err, 'err');
    }
  };

  useEffect(() => {
    getJokes();
  }, []);

  return (
    <div>
      <p>{data?.value}</p>
    </div>
  );
}
