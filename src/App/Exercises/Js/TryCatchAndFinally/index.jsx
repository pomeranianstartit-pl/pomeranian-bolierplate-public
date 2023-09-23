import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';
import { NumberInputValidator } from './InputValidator';

export function ErrorsPrototypesThis() {
  //useState hook
  const [getUserData, setUserData] = useState(null);
  const [getError, setError] = useState(null);

  //synthatic sugar async
  const fetchData = async () => {
    try {
      //synthatic sugar await
      //restfull API
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1'
      );

      const data = await response.json();
      setUserData(data);
    } catch (error) {
      // throw new Error('ups kodzik sie polozyl');
      setError(error);
    } finally {
      console.log('Wykonam się niezależnie czy API sie polozy czy nie');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container--errors-prototypes-this">
      Name: {getUserData?.name}
      <br />
      Username: {getUserData?.username}
      <br />
      Error: {getError && getError.message}
      <br />
      <NumberInputValidator />
    </div>
  );
}
