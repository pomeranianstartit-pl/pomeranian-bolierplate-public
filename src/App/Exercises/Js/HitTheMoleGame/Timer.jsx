const startTimer = (seconds, setSeconds, setIsCountingDown) => {
  setIsCountingDown(true);
  if (seconds !== 0) {
    let secondsRemaining = seconds;

    const intervalId = setInterval(() => {
      if (secondsRemaining >= 0) {
        setSeconds(secondsRemaining--);
      } else {
        clearInterval(intervalId);
        setIsCountingDown(false);
      }
    }, 1000);
  } else if (seconds === 0) {
    return;
  }
};

export default startTimer;
