import { useState, useEffect } from 'react';
import './style.css';

// function howManyMinutes(timestamp) {
//   return Math.floor(timestamp / 1000 / 60);
// }

// function howManySeconds(timestamp) {
//   return Math.floor(timestamp / 1000);
// }

// function getSecondsFromTime(timestamp) {
//   return Math.floor(timestamp / 1000) % 60;
// }

// function getMsFromTime(timestamp) {
//   return timestamp % 100;
// }

// export const Czas = () => {
//   const [minutes, setMinutes] = useState(0);

//   const [seconds, setSeconds] = useState(0);

//   const [msSeconds, setMsSeconds] = useState(0);

//   const [isWorking, setIsWorking] = useState(true);

//   const [startDate, setStartDate] = useState(Date.now());

//   const [deltaTime, setDeltaTime] = useState(0);

//   function stopWatch() {
//     const currentDate = Date.now();

//     setDeltaTime(currentDate - startDate + deltaTime);

//     setIsWorking(false);
//   }

//   function startWatch() {
//     setStartDate(Date.now());

//     setIsWorking(true);
//   }

//   useEffect(() => {
//     let intervalId;

//     if (isWorking) {
//       intervalId = setInterval(() => {
//         const currentDate = Date.now();

//         const timeDiff = currentDate - startDate + deltaTime;

//         const minutes = howManyMinutes(timeDiff);

//         const seconds = getSecondsFromTime(timeDiff);

//         const ms = getMsFromTime(timeDiff);

//         setMinutes(minutes);

//         setSeconds(seconds);

//         setMsSeconds(ms);
//       }, 10);
//     }

//     return () => clearInterval(intervalId);
//   }, [isWorking]);

//   return (
//     <>
//       <div>
//         {isWorking && <button onClick={() => stopWatch()}>Stop</button>}
//         {!isWorking && <button onClick={() => startWatch()}>Start</button>}
//         {minutes.toString().padStart(2, 0)}:{seconds.toString().padStart(2, 0)}:
//         {msSeconds}
//       </div>
//     </>
//   );
// };

// banner with rotating letters;

// export const Czas = () => {
//   const [text, setText] = useState('Test');
//   const [isWorking, setIsWorking] = useState(true);

//   useEffect(() => {
//     const intervalId = setInterval(() => {
//       if (isWorking) {
//         setText((randomText) => randomText.slice(1) + randomText.charAt(0));
//       }
//     }, 200);

//     return () => {
//       clearInterval(intervalId);
//     };
//   }, [isWorking]);

//   const handleStopRotation = () => {
//     setIsWorking(false);
//   };

//   return (
//     <div className="banner">
//       <p className="scrolling-text">{text}</p>
//       <button onClick={handleStopRotation}>Stop</button>
//     </div>
//   );
// };

// countdown from 4 to 0 and back
export const Czas = () => {
  const [seconds, setSeconds] = useState(4);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1);
    }, 1000);

    if (seconds === -1) {
      clearInterval(timer);
      setSeconds(4);
    }

    return () => clearInterval(timer);
  }, [seconds]);

  return <div>{seconds}</div>;
};
