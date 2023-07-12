import './style.css';
import Mole from './mole.svg';
import formatTime from './FormatTime';
export const MoleGameBoard = ({
  setSeconds,
  seconds,
  isCountingDown,
  setIsCountingDown,
  score,
  hitTheMole,
  moleArray,
  gameTime,
  startTime,
}) => {
  return (
    <>
      <div className="container">
        <h2 className="item">CZAS DO KOŃCA: </h2>
        <h2 className="timeAndScore">{formatTime(seconds)}</h2>
        <h2 className="item">WYNIK:</h2>
        <h2 className="timeAndScore">{score}</h2>
        <h2 className="item">PRZYCISKI STERUJĄCE</h2>
        <div className="stopBottom">
          <button
            onClick={() => {
              setIsCountingDown(!isCountingDown);
              setSeconds(startTime / 1000);
            }}
          >
            STOP
          </button>
        </div>
      </div>
      <div className="garden">
        {moleArray.map((mole, index) => {
          return (
            <div key={index}>
              <span>
                {mole.isVisible ? (
                  <div id="gardenSquare" onClick={() => hitTheMole(index)}>
                    <img
                      src={Mole}
                      alt="Mole"
                      style={{
                        display: 'grid',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                      }}
                    />
                  </div>
                ) : (
                  <div id="gardenSquare">
                    <div id="hole"></div>
                  </div>
                )}
              </span>
            </div>
          );
        })}
      </div>
    </>
  );
};
