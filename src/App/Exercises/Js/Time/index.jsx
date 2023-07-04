import React, { useEffect } from "react";
import { useState } from 'react';

// function howManyMinutes(timestamp) {
//    return Math.floor(timestamp / 1000 /60);
// }

// function howManySeconds(timestamp) {
//    return Math.floor(timestamp / 1000);
// }

// const minutes = howManyMinutes(36124123);
// console.log({ minutes });

// const seconds = howManySeconds(36124123)
// console.log({ seconds });

// function getSecondsFromTime(timestamp) {
//    return Math.floor(timestamp / 1000) % 60;
// }

// function getMsFromTime(timestamp) {
//    return timestamp % 100;
// }

   export const Exercise = () => {
   //    const [text, setText] = useState('blabla');
   //    const [isWorking, setIsWorking] = useState(true);
      
   //    useEffect(() => {
   //       if (isWorking) {
   //          setTimeout(() => {
   //             const letter = text[text.length - 1];
   //             setText(letter + text.substring(0, text.length - 1));
   //          }, 200);
   //    }
   // }, [isWorking, text]);

   // return (
   //    <>
   //    {isWorking && <button onClick={() => setIsWorking(false)}>Stop</button>}
   //    {!isWorking && <button onClick={() => setIsWorking(true)}>Start</button>}
   //    <div>{text}</div>
   //    </>
   // );


   const [seconds, setSeconds] = useState(60);
   useEffect(() => {
      const interval = setInterval(() => {
        setSeconds(countSeconds => countSeconds - 1);
      }, 1000);

      return () => {
         clearInterval(interval);
       };
     }, []);

     useEffect(() => {
      if (seconds === 0) {
         console.log("End");
      }
   }, [seconds]);

   const minutes = Math.floor(seconds / 60);
   const remainingSeconds = seconds % 60;

   return (
      <div>
        {minutes > 0 && <p>{minutes} min</p>}
        <p>{remainingSeconds} sec</p>
      </div>
    );
  };




   //    const [minutes, setMinutes] = useState(0);
   //    const [seconds, setSeconds] = useState(0);
   //    const [msSeconds, setMsSeconds] = useState(0);
   //    const [isWorking, setIsWorking] = useState(true);
   //    const [startDate, setStartDate] = useState(Date.now());
   //    const [deltaTime, setDeltaTime] = useState(0);

   //    function stopWatch() { 
   //       const currentDate = Date.now();
   //       setDeltaTime(currentDate - startDate + deltaTime);
   //       setIsWorking(false);
   //    }

   //    function startWatch() {
   //       setStartDate(Date.now());
   //       setIsWorking(true);
   //    }

   //    useEffect(() => {
   //       let intervalid;
   //       if (isWorking) {
   //       intervalid = setInterval(() => {
   //          const currentDate = Date.now();
   //          const timeDiff = currentDate - startDate + deltaTime;

   //          const seconds = getSecondsFromTime(timeDiff);
   //          const minutes = howManyMinutes(timeDiff);
   //          const ms = getMsFromTime(timeDiff)

   //          setMinutes(minutes);
   //          setSeconds(seconds);
   //          setMsSeconds(ms);
   //       }, 10);
   //    }
   //       return () => clearInterval(intervalid);
   //    }, [isWorking]);

   //    return (
   //       <>
   //       <div>
   //          {isWorking && <button onClick={() => stopWatch()}>Stop</button>}
   //          {!isWorking && <button onClick={() => startWatch()}>Start</button>}
   //          {minutes.toString().padStart(2, 0)}:{seconds.toString().padStart(2, 0)}:{msSeconds}
   //       </div>
   //       </>
   //    );
   // };



// const fadeTime = 4000;
// const intervalTime = 1000 / 60;

// const Box = ({ animationTime }) => {
//    const [currentOpacity, setOpacity] = useState(1);
//    const framesPerSec = 60;
//    const opacityStep = 1000 / animationTime;
//    const intervalTime = 1000 / framesPerSec;

//    useEffect(() => {
//       const timeoutFlag = setInterval(() => {
//          setOpacity(currentOpacity - opacityStep / framesPerSec);
//       }, intervalTime);

//       return () => clearInterval(timeoutFlag);
//    }, [currentOpacity]);

//    return (
//       <div
//       style={{
//          width: '100px',
//          height: '100px',
//          backgroundColor: 'red',
//       }}
//       ></div>
//    );
// };


// export const Exercise = () => {

//    const [currentOpacity, setOpacity] = useState(1);
//    const [currentTimeOfAnimation, setCurrentAnimationTime] = useState(fadeTime);



//    useEffect(() => {
//       const timeoutFlag = setInterval(() => {
//          setOpacity(currentOpacity - 0.25 / 60);
//       }, intervalTime);
//       return () => clearInterval(timeoutFlag);
//    }, [currentOpacity]);

//    return (
//       <>
//          <div style={{ width: '100px', height: '100px', backgroundColor: 'red', opacity: currentOpacity,}}></div>
//       </>
//    );


//    const [napis, setNapis] = useState('jakiś napis');
//    const [isNapisVisible, setNapisVisibility] = useState(true);
   

//    useEffect(() => {
//       setTimeout(() => {
//          setNapisVisibility(false);
//       }, 2000);
//    }, []);

//    return (
//       <>
//       <div>{isNapisVisible && napis}</div>
//       </>
//    );

//    const [zm, setZm] = useState(1);
//    const [timeOutFlag, setTimeoutFlag] = useState(null);

//    useEffect(() => {
//       // Runs on every render
//    })

//    useEffect(() => {
//       // Runs only on the first render
//       const timeoutFlag = setInterval(() => {
//          setZm(zm + 1);
//          console.log(zm);
//       }, 2000);

//       return () => clearInterval(timeoutFlag);
//    }, [zm]);

   // 1.odpala się setInterval
   // 2.setInterval czeka 2 sek
   // 3.wewnętrzna funka setInterval się odpala i zmienia
   // 4. zmiana zmiennej powoduje sygnał dla useEffecta aby wykonał
   // 5.useEffektzwraca funckje czyszczącą więc wywołuje się ta funkca
   // 6.use Effeckt się odpala

   // useEffect(() => {
   //    setTimeout(() => {
   //       setZm(zm +1);
   //       console.log(zm);
   //    }, 2000);
   // }, []);

   // useEffect(() => {
      // Rns on the first render
      // And any time any dependency value changes
   // }, [prop, state]);

   // const now = Date.now();
   // const now2 = +new Date();
   // const now3 = new Date();

//    const before = Date.now();
//    for(let i = 0; i < 100000000; i++) {

//    }

//    const timeFlag = setTimeout(() => {
//       console.log('??');
//    }, 1000);

//    console.log(timeFlag);
//    clearTimeout(timeFlag);
   
//    const timeFlagForInterval = setInterval(() => {
//       console.log('co dwie sec', Date.now());
//    }, 2000);

//    function runClearInterval() {
//       clearInterval(timeFlagForInterval);
//    }

//    // setTimeout(() => {}, 1000);
//    // setInterval(() => {}, 1000);

//    const after = Date.now();

//    return (
//     <>
//       <div>{zm}</div>
//       <button onClick={() => runClearInterval()}>Wyczyść</button>
//    </>
//    );
// };

export default Exercise;