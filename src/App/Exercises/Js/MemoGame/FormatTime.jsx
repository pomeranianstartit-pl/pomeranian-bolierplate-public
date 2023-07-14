const formatTime = (totalSeconds) => {
  const date = new Date(totalSeconds * 1000);
  const formattedTime = date.toISOString().substring(11, 19);
  return formattedTime;
};

export default formatTime;
