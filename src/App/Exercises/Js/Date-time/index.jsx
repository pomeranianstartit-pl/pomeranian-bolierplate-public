import './styles.css';
import React, { useEffect, useState } from 'react';

export function DateTime() {
  // const [myDate, setMyDate] = useState(null);
  // const [myYear, setYear] = useState(null);

  // useEffect(() => {
  //   setMyDate(new Date().getDay());
  // }, []);
  // useEffect(() => {
  //   setYear(new Date().getFullYear());
  // }, []);

  // console.log(myDate);

  const [myDate, SetMyDate] = useState(new Date());

  return (
    <div>
      {/* {myDate} - {myYear} */}
      {myDate.getDay()} - {myDate.getFullYear()}
    </div>
  );
}
