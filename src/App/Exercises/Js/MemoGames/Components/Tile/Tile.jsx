import './style.css';

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
