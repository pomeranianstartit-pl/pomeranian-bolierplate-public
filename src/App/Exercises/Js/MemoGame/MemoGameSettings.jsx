import React, {useState, useEffect} from 'react';
import './styles.css';

export const MemoGameSettings = ({
  // memoCount,
  // setMemoCount,
  startStopGame,
  gameStarted,
  boardSizeOptions,
  setBoardSizeOptions,
}) => {
  return (
    <>
    <div className="memoGameOptions">
      <div className="memoOptionsButtons">
        <div className="gameButtonsRows">
          <div>
            <h4>LICZBA ELEMENTÓW</h4>
            {boardSizeOptions.map(({ label, boardSizeValue, checked }, index) => (
              <button
              className={checked ? 'activeButton' : ''}
              onClick={() => {        
                setBoardSizeOptions((prev) => prev.map((button, i) => {
                  const newButton = { ...button };
                  newButton.checked = index === i;
                  return newButton;
                }));
              }}
              >
                {label}
              </button>
            ))}
          </div>
          <div>
            <h4>PRZYCISKI STERUJĄCE</h4>
            <button onClick={startStopGame}>
               {' '}
               {!gameStarted ? 'PASS' : 'START'}</button>
          </div>

        </div>
      </div>
    </div>
    </>
  );
};
export default MemoGameSettings;

  // return (
  //   <>
    {/* <div className="memoGameOptions">
      <p>
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </p>
      <div className="gameOptionsButtons">
        <div className="gameButtonsRows">
        <div>
            <h4>LICZBA ELEMENTÓW</h4> */}
            
            {/* <div className="memoGameOptions">
            <div className="memoOptionsButtons">
            <div className="gameButtonsRows">
            <div>
            <h4>LICZBA ELEMENTÓW</h4>
            
            {boardSizeOptions.map(
              (( label, boardSizeValue, checked), index) => (
              <button
              className={"checked ? 'activeButton' : ''}
              onClick={() => {
                setgameArray(boardSizeValue);
                setBoardSizeOptions((prev) => 
                prev.map((button, i) => {
                  const newButton = {...button};
                  newButton.checked = index === i;
                  return newButton;
                });
                );
            }}
                  >
                  {label}
                  </button>
                ))}
            </div> */}

            //   {memoCountOptions.map(({ label, value }) => (
            //     <button
            //       className={
            //         memoCount === Number(label[0]) ? 'activeButton' : ''
            //       }
            //       onClick={() => setMemoCount(value)}
            //     >
            //       {label}
            //     </button>
            //   ))}
            // </div>
//            <div>
//               <h4>PRZYCISKI STERUJĄCE</h4>

//               <button onClick={startStopGame}>
//                 {' '}
//                 {!gameStarted ? 'PASS' : 'START'}</button>
//                 </div>
//             </div>
//           </div>
//         </div>
//         </div>
//     </>
//   );
// };
// export default MemoGameSettings;