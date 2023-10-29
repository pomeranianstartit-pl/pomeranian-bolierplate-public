import './styles.css';
export function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex !== 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
export const Tile = ({ isVisible, variant = 'neutral', onClick, value }) => {
  let isVisibleClass = '';

  //debbuging mode
  if (
    !(variant === 'correct' || variant === 'incorrect' || variant === 'neutral')
  ) {
    console.warn('błędny parametr variant', variant);
  }

  if (isVisible) {
    isVisibleClass = 'memo-letter-is-visible';
  }
  return (
    <div
      className={`memo-tile memo-tile--${variant} ${isVisibleClass}`}
      onClick={onClick}
    >
      <div className={`memo-letter ${isVisibleClass}`}>{value}</div>
    </div>
  );
};
