import './styles.css';    
import React, { useState, useEffect } from 'react';
import { MemoGameSettings } from './MemoGameSettings.jsx';
import { MemoGameBoard } from './MemoGameBoard.jsx';



export function MemoGame () {

    const [memoArray, setMemoArray] = useState(
        Array(16).fill( "A" )
    );
    const [time, setTime] = useState(0);
    const [clicks, setClicks] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [memoCount, setMemoCount] = useState(0);
    // const [boardSizeOptions, setBoardSizeOptions] = useState([
    //    { label: '8 elementów', boardSizevalue: 8, checked: true },
    //    { label: '16 elementów', boardSizevalue: 16, checked: false },
    //    { label: '20 elementów', boardSizevalue: 20, checked: false },
    // ]);

    // const [gameArray, setGameArray] = useState(Array(boardSizeOptions.find(optionn=> option.checked).boardSizeValue).fill( "A" ));


    useEffect(() => {
        let intervalId;

        if (!intervalId && gameStarted) {
            intervalId = setInterval(() => {
                setTime((prevCountdown) => prevCountdown + 1);
            }, 1000); 
        }
            
            if (time === 60) {
                setGameStarted (false);
            }
            return () => clearInterval(intervalId);
        }, [gameStarted, time]);

        // useEffect(() => {
        //     setGameArray ()
        // }, [boardSizeOptions])

        function handleCellClick() {
            setClicks((prevValue) => prevValue + 1);
        }

        function startStopGame () {
            setGameStarted((prevValue) => !prevValue)
        }

        return (
            <>
            {!gameStarted ? (
            <MemoGameSettings
            startStopGame={() => setGameStarted((prev) => !prev)}
            gameStarted={gameStarted}
            memoCount={memoCount}
            setMemoCount={setMemoCount}
            />
            ) : null}
            <Time
            time={time}
            />
            <MemoGameBoard
            handleCellClick={handleCellClick}
            />
            {gameStarted ? (
            <MemoGameBoard
        
            />
            ) : null}

            </>
    );
  }

  const Time = ({ time }) => {
    const formattedTime = new Date(time * 1000).toISOString().slice(14, 19);
    return <h4> CZAS GRY: {formattedTime}</h4>;
};

//   const Timer = ({timer}) => {
//     <h4>CZAS GRY</h4>
//   }
