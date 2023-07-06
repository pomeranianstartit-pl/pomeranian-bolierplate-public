import Krecik from './krecik.png';

export const MoleGameBoard = ({ moleArray, hitTheMole, scoreCount }) => {
  return (
    <div className="moleGame">
      <h4>WYNIK {scoreCount}</h4>
      {moleArray.map((mole, index) => (
        <div>
          <span>
            {mole.isVisible && (
              <img src={Krecik} onClick={() => hitTheMole(index)} alt="MOLE!" />
            )}
          </span>
        </div>
      ))}
    </div>
  );
};
