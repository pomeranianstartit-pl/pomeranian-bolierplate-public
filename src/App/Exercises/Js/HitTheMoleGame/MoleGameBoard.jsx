import KrecikIMG from './krecik.png';

export const MoleGameBoard = ({ moleArray, onMoleClick }) => {
    const moleRowCount = 2;
    const molesPerRow = moleArray.length / moleRowCount;
    const moleRows = [];
  
    for (let i = 0; i < moleRowCount; i++) {
      const startIndex = i * molesPerRow;
      const endIndex = startIndex + molesPerRow;
      const rowMoles = moleArray.slice(startIndex, endIndex);
  
      const row = (
        <div key={i} className="mole-row">
          {rowMoles.map((mole, index) => (
            <div key={index} className="mole-cell">
              {mole.isVisible && (
                <img src={KrecikIMG} onClick={() => onMoleClick(index + startIndex)} />
              )}
            </div>
          ))}
        </div>
      );
  
      moleRows.push(row);
    }

    return (
      <div className="container">
        <div className="mole-game-board">
          {moleRows}
        </div>
      </div>
    );
  };