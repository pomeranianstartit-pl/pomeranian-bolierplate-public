import React, { useState, useEffect } from 'react';
import './styles.css';

export const MemoGameBoard = ({ memoArray, hitTheMole, score }) => {

  return (
     <div className="memoGame">
     <div>
        <h4> LICZBA RUCHÓW</h4>
        </div>
        <h4>PRZYCISKI STRUJĄCE</h4>

       <div className="board">
      {/* {memoArray.map((memo, index) => {
        return ( */}
        <div key ={index}>
          <span onClick
        </div>
          {/* // <div className="square"> */}
           {/* <span>
                      {mole.isVisible ? (
                           <img src={Mole} 
                           onClick={() => hitTheMole(index)} 
                           alt="MOLE"
                           />
                      ) : null}
                  </span> */}
          {/* </div> */}
      {/* //   );
      // })} */}
    </div>
  </div>
);
  };

  export default MemoGameBoard;