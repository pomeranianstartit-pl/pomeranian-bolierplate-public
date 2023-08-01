import { useEffect, useState } from 'react';
import './styles.css';

export const DateAndTime = () => {
  const [hours, setHours] = useState('--');
  const [minutes, setMinutes] = useState('--');
  const [seconds, setSeconds] = useState('--');
  const [daysToWeekend, setDaysToWeekend] = useState('--');
  const [hoursToWeekend, setHoursToWeekend] = useState('--');
  const [minutesToWeekend, setMinutesToWeekend] = useState('--');
  const [secondsToWeekend, setSecondsToWeekend] = useState('--');

  function formatTime(time) {
    const formattedTime = time < 10 ? '0' + time : time;

    return formattedTime;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const currentDate = new Date();
      const currentHour = formatTime(currentDate.getHours());
      const currentMinutes = formatTime(currentDate.getMinutes());
      const currentSeconds = formatTime(currentDate.getSeconds());

      setHours(currentHour);
      setMinutes(currentMinutes);
      setSeconds(currentSeconds);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTimestamp = new Date().getTime();
      const weekendTimestamp = new Date('2023-08-04 22:00:00').getTime();
      const timeToWeekend = weekendTimestamp - currentTimestamp;

      const daysLeft = Math.floor(timeToWeekend / (1000 * 60 * 60 * 24));
      const hoursLeft = Math.floor((timeToWeekend / (1000 * 60 * 60)) % 24);
      const minutesLeft = Math.floor((timeToWeekend / (1000 * 60)) % 60);
      const secondsLeft = Math.floor((timeToWeekend / 1000) % 60);

      setDaysToWeekend(formatTime(daysLeft));
      setHoursToWeekend(formatTime(hoursLeft));
      setMinutesToWeekend(formatTime(minutesLeft));
      setSecondsToWeekend(formatTime(secondsLeft));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>
        Current time: {hours}:{minutes}:{seconds}
      </p>
      <p>
        Countdown to the weekend: {daysToWeekend} days and {hoursToWeekend}:
        {minutesToWeekend}:{secondsToWeekend}
      </p>
    </div>
  );
};