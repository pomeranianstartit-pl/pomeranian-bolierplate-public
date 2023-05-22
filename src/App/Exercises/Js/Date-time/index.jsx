import { useState, useEffect } from 'react';

import './styles.css';

export function DateTime() {
  const [myDate, setMyDate] = useState(new Date());

  //Można też 2x useEffect

  useEffect(() => {
    setMyDate(new Date());
  }, []);

  return (
    <div>
      {myDate.getDay()}-{myDate.getFullYear()}
    </div>
  );
}
