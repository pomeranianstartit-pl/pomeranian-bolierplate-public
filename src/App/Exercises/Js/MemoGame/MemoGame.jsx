import './styles.css';    
import React, { useState, useEffect } from 'react';
import { MemoGameSettings } from './MemoGameSettings.jsx';
import { MemoGameBoard } from './MemoGameBoard.jsx';

const alphabet = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
   
  const getRandomLetters = (amount) => {
    const shuffled = [...alphabet].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, amount);
  };

  function createStageElement(character, index) {
    return {character, id: index, isGuessed: false, isVisible:false };
  }
export function MemoGame () {

    // const [gameArray, setGameArray] = useState(
    //     Array(16).fill( "A" )
    // );
    const DEBUG_showAll = false;
    const [stage, setStage] = useState([]);
    const [time, setTime] = useState(0);
    const [clicks, setClicks] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [scoreCount, setScoreCount] = useState(null);
    const [boardSizeOptions, setBoardSizeOptions] = useState([
       { label: '8 elementów', boardSizeValue: 8, checked: true },
       { label: '16 elementów', boardSizeValue: 16, checked: false },
       { label: '20 elementów', boardSizeValue: 20, checked: false },
    ]);

    const [gameArray, setGameArray] = useState(Array(boardSizeOptions.find(option=> option.checked).boardSizeValue).fill('A'));

    useEffect(() => {
        setGameArray(
        Array(
            boardSizeOptions.find((option) => option.checked).boardSizeValue
            ).fill('A')
        );
    }, [boardSizeOptions]);

    function startMemoGame() {
        const getRandomLettersList = getRandomLetters(
            boardSizeOptions.find((option) => option.checked).boardSizevalue
        );
        const stage = [...getRandomLettersList, ...getRandomLettersList].map((letter, index) =>
          createStageElement(letter, index)
        );
    console.log(stage);
    setStage(stage);
    }

    useEffect(() => {
        let interval;

        if (!interval && gameStarted) {
            interval = setInterval(() => {
                setTime((prevCountdown) => prevCountdown + 1);
            }, 1000); 
        }
            
            if (time === 60) {
                setGameStarted (false);
            }
            return () => {
                clearInterval(interval);
            };
        }, [gameStarted, time]);


        function handleCellClick() {
            setClicks((prevValue) => prevValue + 1);
        }

        function renderElement(cardObject) {
            return (
                <div
                key={cardObject.id}
                className={classOfElement(cardObject)}
                >
                {(cardObject.isGuessed || cardObject.isVisible || DEBUG_showAll) && cardObject.character}
                </div>
            );
        }

        function classOfElement(el) {
            const classes = ['cell'];
            if (el.isGuessed) {
                classes.push('guessed');
            }
            if (!el.isVisible && !el.isGuessed && !DEBUG_showAll) {
                classes.push('closed');
            }
            return classes .join(' ');
        }

        // function startStopGame () {
        //     setGameStarted((prevValue) => !prevValue)
        //     gameStarted&& startMemoGame()

        // }

        return (
            <>
            <p>
            Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
            </p>
            <MemoGameSettings
            startStopGame={() => {
                setGameStarted((prev) => !prev);
                setScoreCount(0);
                setTime(0);
                setClicks(0);
                startMemoGame();
            }}
            gameStarted={gameStarted}
            gameArray={gameArray}
            setGameArray={setGameArray}
            boardSizeOptions={boardSizeOptions}
            setBoardSizeOptions={setBoardSizeOptions}
            stage={stage}
        
            />
            <Timer time={time} />
            <MoveCounter clicks={clicks} />
            <MemoGameBoard 
            gameArray={gameArray} 
            handleCellClick={handleCellClick} 
            renderElement={renderElement} 
            gameStarted={gameStarted}
            stage={stage}
            />
            </>
    );
  }

  const Timer = ({ time }) => {
    const formattedTime = new Date(time * 1000).toISOString().slice(14, 19);
    return <h4>CZAS GRY: {formattedTime}</h4>;
};

const MoveCounter = ({ clicks }) => {
    return <h4>LICZBA RUCHÓW: {clicks}</h4>;
};

//   const Timer = ({timer}) => {
//     <h4>CZAS GRY</h4>
//   }
