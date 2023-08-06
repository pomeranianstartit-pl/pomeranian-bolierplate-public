import './styles.css';

export const MemoGameBoard = ({ boardArray, seconds }) => {

  let minutesToFinish = Math.floor(seconds / 60)
  let secondsToFinish = seconds % 60;
  return (
    <div>
     <div className="memoBoard">
      <div>
        <h4>CZAS GRY</h4>
        <h4>LICZBA RUCHÓW</h4>
        <div className="TimeAndSteps">
          {/* <span>
            {minutesToFinish.toString().padStart(1, 0)};
            {secondsToFinish.toString().padStart(1, 0)};
          </span> */}
    
      <div className="board">
     {/* {boardArray.map((memo, index) => (
      <span>
      {memo.isVisible ? (
        <span className="boardElement"></span>
      ) : null}
      </span>
     ))} */}
     </div>
     </div>
     </div>
     </div>
     </div>

);
  };

  export default MemoGameBoard;