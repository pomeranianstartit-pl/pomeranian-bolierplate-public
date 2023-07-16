import './styles.css';    
import React, { useState, useEffect } from 'react';
import { MemoGameSettings } from './MemoGameSettings.jsx';
import { MemoGameBoard } from './MemoGameBoard.jsx';

const symbolsArray = [
    '💀',
    '🔥',
    '✅',
    '🌘',
    '😂',
    '✨',
    '☀️',
    '🎉',
    '👀',
    '📱',
    '🐶',
    '🍇',
    '💮',
    '🌴',
    '🤑',
    '💋',
    '🏘️',
    '🏍️',
    '⏰',
    '💎',
    '⚽',
    '🎧',
    '🏁',
    '👾',
    '🍟',
    '♌',
  ];
   
  export const MemoGame = () => {
    const deafaultBoardSize = 4;
    const [time, setTime] = useState(0);
    const [boardSize, setBoardSize] = useState(deafaultBoardSize);
    const [score, setScore] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [clicks, setClicks] = useState(0);
    const [memoArray, setMemoArray] = useState([]);
    const [firstClickedCard, setFirstClickedCard] = useState(null);
    const [secondClickedCard, setSecondClickedCard] = useState(null);
    const [getAmountOfSymbols, setGetAmountOfSymbols] = useState(
      boardSize * boardSize * 0.5
    );

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

    useEffect(() => {
        let countdownInterval;
        if (!countdownInterval && gameStarted) {
          countdownInterval = setInterval(() => {
            setScore((previousScore) => previousScore + 1);
          }, 1000);
        }
        return () => clearInterval(countdownInterval);
      }, [score, gameStarted]);

      useEffect(() => {
        setScore(0);
      }, [gameStarted]);
    
      useEffect(() => {
        setGetAmountOfSymbols(boardSize * boardSize * 0.5);
      }, [boardSize]);

      useEffect(() => {
        const first = memoArray.find((card) => card.id === firstClickedCard);
        const second = memoArray.find((card) => card.id === secondClickedCard);
        let timeout;

        setMemoArray((prevMemoArray) =>
      prevMemoArray.map((card) => {
        const cardCopy = { ...card };
        if (cardCopy.id === first?.id || cardCopy.id === second?.id) {
          cardCopy.isVisible = true;
          cardCopy.isGuessed =
            cardCopy.isGuessed || first?.character === second?.character;
        } else {
          cardCopy.isVisible = false;
        }
        return cardCopy;
      })
    );

    if (
        typeof firstClickedCard === 'number' &&
        typeof secondClickedCard === 'number'
      ) {
        timeout = setTimeout(() => {
          setMemoArray((prev) =>
            prev.map((card) => {
              const copy = { ...card };
              copy.isVisible = false;
              return copy;
            })
          );
        }, 2000);
      }
      return () => clearTimeout(timeout);
    }, [firstClickedCard, secondClickedCard]);

    function startStopGame(gameStarted) {
        setGameStarted((prev) => !prev);
        if (gameStarted) {
          getRandomSymbols();
          runMemoBoard();
        }
      }

      const getRandomSymbols = () => {
        const shuffledSymbols = [...symbolsArray].sort(() => 0.5 - Math.random());
        return shuffledSymbols.slice(0, getAmountOfSymbols);
      };

      function createMemoElement(character, index) {
        return { character, id: index, isGuessed: false, isVisible: false };
      }
      function runMemoBoard() {
        const getRandomSymbolsList = getRandomSymbols();

        const currentArrayList = [...getRandomSymbolsList, ...getRandomSymbolsList]
      .sort(() => 0.5 - Math.random())
      .map((character, index) => createMemoElement(character, index));
    setMemoArray(currentArrayList);
  }

  function revealCard(card) {
    if (card.id === firstClickedCard || card.isGuessed) return;
    if (typeof firstClickedCard !== 'number') {
      setFirstClickedCard(card.id);
      return;
    }

    if (typeof secondClickedCard !== 'number') {
        setClicks(clicks + 1);
        setSecondClickedCard(card.id);
        return;
      }
      setSecondClickedCard(null);
      setFirstClickedCard(card.id);
    }

    function compareRevealedCards() {}

  function classOfElement(card) {
    const classes = ['cell'];
    if (card.isGuessed) {
      classes.push('guessed');
    }

    if (!card.isVisible && !card.isGuessed) {
      classes.push('closed');
    }

    return classes.join(' ');
  }

  return (
    <>
      {!gameStarted ? (
        <MemoGameSettings
          boardSize={boardSize}
          setBoardSize={setBoardSize}
          startStopGame={startStopGame}
          gameStarted={gameStarted}
        />
      ) : null}
      {/* <p>Czas gry: {counter}</p> */}
      {gameStarted ? (
        <MemoGameBoard
          memoArray={memoArray}
          setMemoArray={setMemoArray}
          clicks={clicks}
          score={score}
          setScore={setScore}
          startStopGame={startStopGame}
          gameStarted={gameStarted}
          boardSize={boardSize}
          classOfElement={classOfElement}
          revealCard={revealCard}
        />
      ) : null}
    </>
  );
};
  


