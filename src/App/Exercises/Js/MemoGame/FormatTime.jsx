// import React, { useState, useEffect } from 'react';

// const Timer = () => {
//   const[count, setCount] = useState(0);

// useEffect(() => {
//   const IntervalId = setIntervalId(() => {
//     setCount((prevCount) => prevCount +1);
//   }, 1000);
//   return () => clearInterval(IntervalId);
// },[]);
// return (
//   <div>
//     <h1>Timer: {count} seconds</h1>
//   </div>
// );
// };

const formatTime = (totalSeconds) => {
    const date = new Date(totalSeconds * 1000);
    const formattedTime = date.toISOString().substring(11, 19);
    return formattedTime;
  };
  export default formatTime;