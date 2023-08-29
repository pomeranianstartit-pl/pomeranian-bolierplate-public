import Krecik from './krecik.png';

export const MoleGameBoard = ({
  moleArray,
  hitTheMole,
  score,
  startStopGame,
  gameStarted,
  counter,
}) => {
  return (
    <div>
      <div className="gameOptionsButtons">
        <div className="gameButtonsRows">
          <div>
            <h4>CZAS DO KOŃCA </h4>
            {counter}
          </div>
          <div>
            <h4>WYNIK </h4>
            {score}
          </div>
          <div>
            <h4>PRZYCISKI STERUJĄCE</h4>
            <button className="appButton" onClick={startStopGame}>
              {gameStarted ? 'STOP' : 'START'}
            </button>
          </div>
        </div>

        <div className="moleGame">
          {moleArray.map((mole, index) => (
            <div
              key={index}
              onClick={() => hitTheMole(index)}
              className={`board ${
                mole.isWhacked
                  ? 'field-green'
                  : mole.isMissed
                  ? 'field-red'
                  : ''
              }`}
            >
              <div className="hole">
                {mole.isVisible && (
                  <div className="square">
                    <img src={Krecik} alt="MOLE!" />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
