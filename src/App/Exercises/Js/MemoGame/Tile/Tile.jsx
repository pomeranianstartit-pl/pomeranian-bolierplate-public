import './styles.css';

// isMole - true/false

export const Tile = ({ onClick, char, isVisible, isGuessed, isCorrect }) => {
  const shouldShow = isVisible || isGuessed;
  return (
    <button
      className={`memo-tile ${isVisible && 'memo-visible'} ${
        !isCorrect && 'memo-incorrect'
      } ${isGuessed && 'memo-guessed'}`}
      onClick={onClick}
    >
      {shouldShow && char}
    </button>
  );
};
