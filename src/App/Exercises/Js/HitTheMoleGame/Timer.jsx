const startTimer = (seconds, setSeconds, setIsCountingDown) => {
  setIsCountingDown(true);

  let secondsRemaining = seconds;

  const intervalId = setInterval(() => {
    if (secondsRemaining >= 0) {
      setSeconds(secondsRemaining--);
    } else {
      clearInterval(intervalId);
      setIsCountingDown(false);
    }
  }, 1000);
};

export default startTimer;
