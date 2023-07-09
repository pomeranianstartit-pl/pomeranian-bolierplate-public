import React, { useState, useEffect } from 'react';
import Mole from '../../../Images/Mole.svg';
import './styles.css';

const MoleGameBoard = ({moleArray, hitTheMole, scoreCount}) => {
    return (
        <div className="moleGame">
        <h4>czas do końca</h4>
        <div>
            WYNIK 
            <button> {scoreCount}</button>{' '}
        </div>
        <div>PRZYCISKI STERUJĄCE</div>

        <div className="board">
            {moleArray.map((mole, index) => {
               return (
               <div className="square">
                    <span>
                        {mole.isVisible ? (
                             <img src={Mole} alt="" onClick={() => hitTheMole(index)} />
                        ) : null}
                    </span>
                </div>
               );
            })}
            </div>
        </div>
    );
 };

  export default MoleGameBoard;