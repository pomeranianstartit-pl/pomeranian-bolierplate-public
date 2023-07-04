import './styles.css';
import { useEffect, useState } from 'react';

export const Time = () => {
  const [text, setText] = useState('abcde');
  const intervalTime = 1000;

  useEffect(() => {
    const intervalId = setInterval(() => {
      const letter = text[text.length - 1];
      setText(letter + text.substring(0, text.length - 1));
    }, intervalTime);

    return () => clearInterval(intervalId);
  });

  const [countDown, setCountDown] = useState(10);
  useEffect(() => {
    if (countDown !== 0) {
      const countdownInterval = setInterval(() => {
        setCountDown(countDown - 1);
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  });
  // constfadeTime = 4000;   /////Tu się zgubiłem, przepisany gotowy komponent///
  // const intervalTime = 1000/60;

  //   // const [napis, setNapis] = useState('jakiś napis');

  //   const [currentOpacity, setOpacity] = useState('1');

  //     useState(fadeTime);
  //   useEffect(() => {

  //     setTimeout(() => {
  //       // setNapis(null);
  //     }, 5000);
  //   }, []);

  // const [zm, setZm] = useState(1);

  // useEffect(() => {
  //   const timeOutFlag = setInterval(() => {
  //     setZm(zm + 1);
  //     console.log(zm);
  //   }, 2000);

  //   return () => clearInterval(timeOutFlag);
  // }, [zm]);

  // const now = Date.now();
  // const now2 = +new Date();
  // const now3 = new Date();

  // const before = Date.now();
  // for (let i = 0; i < 100000000; i++) {}

  // // setTimeout(()=>,1000); za jakiś casz
  // // setInterval(()=>{},1000); co jakiś czas (niedokładne)

  // const timeFlag = setTimeout(() => {
  //   console.log('??');
  // }, 1000);

  // console.log(timeFlag);

  // clearTimeout(timeFlag);

  // const timeFlagForInterval = setInterval(() => {
  //   setZm(zm + 1);
  //   console.log(zm);
  //   console.log('co dwie sekundy', Date.now());
  // }, 2000);

  // function runClearInterval() {
  //   clearInterval(timeFlagForInterval);
  // }

  // const after = Date.now();

  //////////////////////////////////////////////////////////component BOX//////////////////////////////////////////////////////////////////////////////

  const Box = ({ animationTime }) => {
    const [currentOpacity, setOpacity] = useState('1');
    const framePerSecond = 60;

    const opacityStep = 1000 / animationTime;
    const intervalTime = 1000 / framePerSecond;

    useEffect(() => {
      const timeOutFlag = setInterval(() => {
        setOpacity(currentOpacity - opacityStep / framePerSecond);
      }, intervalTime);

      return () => clearInterval(timeOutFlag);
    }, [currentOpacity]);

    return (
      <div
        style={{
          width: '200px',
          height: '200px',
          backgroundColor: 'gray',
          opacity: currentOpacity,
        }}
      ></div>
    );
  };

  // function howManyMinutes(timestamp) {
  //     return Math.floor(timestamp / 1000 / 60);
  //   }

  // function howManySeconds(timestamp) {
  //   return Math.floor(timestamp / 1000);
  //   }

  //       function getSecondsFromTime(timestamp) {
  //     return Math.floor(timestamp / 1000) % 60;
  //   }

  // function getMsFromTime(timestamp) {

  //   return timestamp % 100;

  // }

  //       export const Czas = () => {

  //   const [minutes, setMinutes] = useState(0);

  //   const [seconds, setSeconds] = useState(0);

  //   const [msSeconds, setMsSeconds] = useState(0);

  //   const date = Date.now();

  //   useEffect(() => {
  //       const intervalId = setInterval(() => {
  //         const currentDate = Date.now();
  //         const timeDiff = currentDate - date;
  //               const minutes = howManyMinutes(timeDiff);
  //         const seconds = getSecondsFromTime(timeDiff);
  //         const ms = getMsFromTime(timeDiff);
  //               setMinutes(minutes);
  //         setSeconds(seconds);
  //         setMsSeconds(ms);
  //       }, 10);
  //       return () => clearInterval(intervalId);
  //     }, []);

  return (
    <>
      <div>
        Czas
        <br />
        {/* {napis} */}
        {/* {(after - before) / 1000}s<br /> */}
        {/* {zm} zmienna co ok 2s */}
      </div>
      <Box animationTime={2000} />
      {/* <button onClick={() => runClearInterval}>Wyczyść</button> */}
      <div>
        {/* {minutes.toString().padStart(2, 0)}:{seconds.toString().padStart(2, 0)}:{msSeconds} */}
      </div>
      <div>{text}</div>
      <div>{countDown}</div>
    </>
  );
};
