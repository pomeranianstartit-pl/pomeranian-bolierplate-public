import KrecikIMG from './krecik.png';

export const MoleGameBoard = ({ moleArray, onMoleClick }) => {
  return (
    <div className="container">
      <div className="mole-game-board">
        {moleArray.map((mole, index) => (
          <div key={index} className="mole-cell">
            {mole.isVisible && (
              <img src={KrecikIMG} onClick={() => onMoleClick(index)} />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
