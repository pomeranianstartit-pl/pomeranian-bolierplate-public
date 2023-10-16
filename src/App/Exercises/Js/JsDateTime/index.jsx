import React from 'react';

 

export const JsDateTime = () => {

  const currentDate = new Date();

  console.log(currentDate.toISOString(), 'currentDate');

 

  const year = currentDate.getFullYear();

  console.log(year, 'year');

 

  const month = currentDate.getMonth();

  console.log(month, 'month'); // 0 - 11

 

  const day = currentDate.getDate();

  console.log(day, 'day');

 

  const hours = currentDate.getHours();

  console.log(hours, 'hours');

 

  // Timestamp

  const parsedTimeTimestamp = Date.parse('2021-10-11T14:48:00.000Z'); // to jest czas w ms od 1.1.1970

  const parsedTime = new Date(parsedTimeTimestamp); // to jest obiekt daty

 

  console.log(parsedTime, 'parsedTime');

  console.log(parsedTimeTimestamp, 'parsedTimeTimestamp');

 

  // ile czasu upłyneło od x do teraz

 

  const currentTimeStamp = Date.now();

  const newYearTimestamp = Date.parse('2023-12-31T23:59:59Z');

  const timeDifference = newYearTimestamp - currentTimeStamp;

  const daysUntilNewYear = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

 

  console.log(daysUntilNewYear, 'daysUntilNewYear');

 

  return <div>Js date time</div>;

};

 