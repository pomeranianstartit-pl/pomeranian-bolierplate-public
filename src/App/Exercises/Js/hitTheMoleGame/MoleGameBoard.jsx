import Krecik from './krecik.png';

export const MoleGameBoard = ({
  moleArray,
  hitTheMole,
  scoreCount,
  startStopGame,
  gameStarted,
  counter,
}) => {
  return (
    <div>
      <h4>CZAS DO KOŃCA </h4>
      {counter}
      <h4>WYNIK </h4>
      {scoreCount}
      <h4>PRZYCISKI STERUJĄCE</h4>
      <button onClick={startStopGame}>{gameStarted ? 'STOP' : 'START'}</button>
      <div className="moleGame">
        {moleArray.map((mole, index) => (
          <div className="board">
            <div className="hole">
              {mole.isVisible && (
                <div className="square">
                  <img
                    src={Krecik}
                    onClick={() => hitTheMole(index)}
                    alt="MOLE!"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
