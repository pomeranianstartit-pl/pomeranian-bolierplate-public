import './styles.css';

export const Tile = ({ isVisible, variant = 'neutral', onClick, value }) => {
  if (
    !(variant === 'correct' || variant === 'incorrect' || variant === 'neutral')
  )
    console.warn('błędny parametr variant', variant);
  let isVisibleClass = '';
  if (isVisible) isVisibleClass = 'memo-letter--is-visible';
  return (
    <div className={`memo-tile memo-tile--${variant}`} onClick={onClick}>
      {' '}
      <div className={`memo-letter ${isVisibleClass}`}>{value}</div>
    </div>
  );
};
