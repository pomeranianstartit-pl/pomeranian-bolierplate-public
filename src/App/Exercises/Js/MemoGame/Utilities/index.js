import { MemoGame } from '../MemoGame';

export function formatTime(time) {
  const timeInSeconds = Math.floor(time / 1000);
  const timeInMinutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, '0');
  const seconds = Math.round(timeInSeconds % 60)
    .toString()
    .padStart(2, '0');
  //console.log(time, timeInSeconds, timeInMinutes, seconds);
  return `${timeInMinutes}:${seconds}`;
}
export function getAlphabet(Limit) {
  const startAscii = 65;
  //Litera A
  const endAscii = 90;
  // Litera Z
  let maxSize = endAscii - startAscii + 1;
  maxSize = Limit > 0 && Limit <= maxSize ? Limit : maxSize;

  return Array(maxSize)
    .fill(0)
    .map((_, index) => index + startAscii)
    .map((characterCode) => String.fromCharCode(characterCode));
}
