import './style.css';

export const Tile = ({ onClick, char, isVisible, isGuessed, isCorrect }) => {
  const shouldShow = isVisible || isGuessed;
  return (
    <button
      className={`memo-tile ${shouldShow && 'memo-visible'} ${
        !isCorrect && 'memo-incorrect'
      }
      ${!isGuessed && 'memo-guessed'}`}
      onClick={onClick}
    >
      {shouldShow && char}
    </button>
  );
};
