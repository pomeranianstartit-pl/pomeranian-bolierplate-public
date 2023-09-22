import './style.css';

export const Tile = ({ onClick, char, isVisible, isGuessed, isCorrect }) => {
  const shouldShow = isVisible || isGuessed;

  const classNames = ['memo-tile'];

  if (isVisible) classNames.push('memo-visible');

  if (!isCorrect && isVisible) classNames.push('memo-incorrect');

  if (isGuessed) classNames.push('memo-guessed');

  return (
    <button
      className={classNames.join(' ')}
      onClick={onClick}
      disabled={isGuessed || (isVisible && isCorrect)}
    >
      {shouldShow && char}
    </button>
  );
};
