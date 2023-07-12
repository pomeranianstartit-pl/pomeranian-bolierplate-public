import { useState, useEffect } from 'react';

function howManyMinutes(timestamp) {
  return Math.floor(timestamp / 1000 / 60);
}

function howManySeconds(timestamp) {
  return Math.floor(timestamp / 1000);
}

function getSecondsFromTime(timestamp) {
  return Math.floor(timestamp / 1000) % 60;
}

function getMsFromTime(timestamp) {
  return timestamp % 100;
}

export const TimeExercise = () => {
  const [minutes, setMinutes] = useState(0);

  const [seconds, setSeconds] = useState(0);

  const [msSeconds, setMsSeconds] = useState(0);

  const [isWorking, setIsWorking] = useState(true);

  const [startDate, setStartDate] = useState(Date.now());

  const [deltaTime, setDeltaTime] = useState(0);

  function stopWatch() {
    const currentDate = Date.now();

    setDeltaTime(currentDate - startDate + deltaTime);

    setIsWorking(false);
  }

  function startWatch() {
    setStartDate(Date.now());

    setIsWorking(true);
  }

  useEffect(() => {
    let intervalId;

    if (isWorking) {
      intervalId = setInterval(() => {
        const currentDate = Date.now();

        const timeDiff = currentDate - startDate + deltaTime;

        const minutes = howManyMinutes(timeDiff);

        const seconds = getSecondsFromTime(timeDiff);

        const ms = getMsFromTime(timeDiff);

        setMinutes(minutes);

        setSeconds(seconds);

        setMsSeconds(ms);
      }, 10);
    }

    return () => clearInterval(intervalId);
  }, [isWorking]);

  return (
    <>
      <div>
        {isWorking && <button onClick={() => stopWatch()}>Stop</button>}
        {!isWorking && <button onClick={() => startWatch()}>Start</button>}
        {minutes.toString().padStart(2, 0)}:{seconds.toString().padStart(2, 0)}:
        {msSeconds}
      </div>
    </>
  );
};
