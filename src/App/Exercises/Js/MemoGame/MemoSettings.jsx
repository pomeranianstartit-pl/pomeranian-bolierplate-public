import formatTime from '../MemoGame/FormatTime';

export const MemoSettings = ({
  boardSize,
  setBoardSize,
  setGameStart,
  score,
  setScore,
  gameTime,
  setGameTime,
  finalSettings,
}) => {
  const gameTimeOption = [
    { label: '8 elementów', boardValue: 8 },
    { label: '16 elementów', boardValue: 16 },
    { label: '20 elementów', boardValue: 20 },
  ];

  return (
    <>
      <div className="memo">
        <h4>Memo game</h4>
        <div className="gameOptionsButtons">
          <div className="gameButtonsRows">
            <div>
              <h4>Liczba elementów {boardSize}</h4>
              {gameTimeOption.map(({ label, boardValue }) => (
                <button
                  className={boardSize === boardValue ? 'activeButton' : ''}
                  onClick={() => {
                    setBoardSize(boardValue);
                  }}
                  key={label}
                >
                  {label}
                </button>
              ))}
            </div>
            <div>
              <h4>Przyciski sterujące</h4>
              <button
                onClick={() => {
                  setGameStart(true);
                  setScore(0);
                  setGameTime(0);
                }}
              >
                START
              </button>
              {score > 0 && (
                <h2>
                  Wynik {score} w czasie {formatTime(gameTime)} na
                  {finalSettings} elementach
                </h2>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
