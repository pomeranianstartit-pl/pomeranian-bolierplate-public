import React, { useEffect, useState } from 'react';
import './styles.css';
import { isVisible } from '@testing-library/user-event/dist/utils';
import { CenterFocusStrong } from '@mui/icons-material';

export function TimeoutSet() {
  // setTimeout(() => {
  //   console.log('this is the first message');
  // }, 5000);
  // setTimeout(() => {
  //   console.log('this is the second message');
  // }, 3000);

  // const wait = (ms) =>
  //   new Promise((resolve, reject) => setTimeout(resolve, ms));
  // for (var i = 0; i < 3; i++) {
  //   wait(i * 100).then(() => console.log(i));
  // }

  const [isVisible, setIsVisible] = useState(true);
  const [style, setStyle] = useState({ opacity: 1, transition: 'all 3s' });
  const changeOpacity = () => {
    style = { opacity: 0, transition: 'all 3s' };
    setTimeout(() => {
      setIsVisible(false);
    }, 3 * 1000);
  };

  function startCountdown(seconds) {
    let counter = seconds;

    const interval = setInterval(() => {
      console.log(counter);
      counter--;

      if (counter < 0) {
        clearInterval(interval);
        console.log('Już!');
      }
    }, 200);
  }
}
// var count = 60,
//   timer = setInterval(function () {

// const [style, setStyle] = useState({
//   position: 'absolute',
//   left: -10000,
//   transition: 'all 5s',
// });

// setTimeout(() => {
//   setStyle({ position: 'absolute', left: 500 });
// }, 5 * 1000);

export const AnimeButton = () => {
  const [shake, setShake] = useState(false);

  const anime = () => {
    setShake(true);
    setTimeout(() => setShake(false), 2000);
  };

  return (
    <>
      {isVisible && <p>My name is ruin</p>}
      {/* <button onClick={changeOpacity}>Vanish the ruin</button> */}
      <br />
      <div>
        <button>Odliczanie</button>
      </div>
      <div>
        <button onClick={anime} className={shake ? `shake` : null}>
          Click me
        </button>
      </div>
    </>
  );
};
