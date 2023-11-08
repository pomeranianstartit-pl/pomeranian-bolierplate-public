import React, { useEffect, useState } from 'react';

import './styles.css';

const newYearsEve = Date(2023, 11, 31, 0, 0, 0);

const getTimedelta = () => {
  const now = new Date();
  const timedelta = newYearsEve.getTime() - now.getTime();

  // difference in days 24 hours, 60 minutes 60 seconds multiply 1000 to get secinds
  const days = Math.floor(timedelta / (24 * 60 * 60 * 1000));
  // difference in hours
  const hours =
    Math.floor(timedelta % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000);
  // difference in minutes
  const minutes = Math.floor((timedelta % (60 * 60 * 1000)) / (60 * 1000));
  //difference in seconds
  const seconds = Math.floor((timedelta % (60 * 1000)) / 1000);

  return {
    days,
    hours,
    minutes,
    seconds,
  };
};

export function JsCountdown() {
  const [countdown, setCountdown] = useState();
  const [loading, setLoading] = useState(true);
  const [isNewYear, setIsNewYear] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const timedelta = getTimedelta();

      setCountdown(timedelta);
      setLoading(false);

      if (timedelta.seconds < 0) {
        setIsNewYear(true);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (isNewYear) {
    return <h1>HappyNew Year </h1>;
  }

  return (
    <div className="container1">
      <div className="flex">
        <span className="font-big">{countdown.days}</span>;
        <span className="font-small">DAYS</span>;
      </div>
      <div className="flex">
        <span className="font-big">{countdown.hours}</span>;
        <span className="font-small">HOURS</span>;
      </div>
      <div className="flex">
        <span className="font-big">{countdown.minutes}</span>;
        <span className="font-small">MINUTES</span>;
      </div>
      <div className="flex">
        <span className="font-big">{countdown.seconds}</span>;
        <span className="font-small">SECONDS</span>;
      </div>
    </div>
  );
}
