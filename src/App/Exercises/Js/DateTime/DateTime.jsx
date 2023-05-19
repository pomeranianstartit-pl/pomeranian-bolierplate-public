import './styles.css';
import { useState } from 'react';
import { useEffect } from 'react';

export function DateTime() {
  const [myDate, setMyDate] = useState(new Date());

  // useEffect(() => {
  //   setMyDate(new Date());
  // }, []);

  // console.log(myDate);

  return (
    <div>
      <p>Dzień tygodnia: {myDate.getDay()}</p>
      <p>Rok: {myDate.getFullYear()}</p>
    </div>
  );
}

//dzień tygodnia, rok

// getDay zwaraca liczbę, który jest dzień tygodnia, więc dla nazyw trzeba by dodać drugą funkję
// const days = [
//   'niedziela',
//   'poniedziałek',
//   'wtorek',
//   'środa',
//   'czwartek',
//   'piątek',
//   'sobota',
// ];
