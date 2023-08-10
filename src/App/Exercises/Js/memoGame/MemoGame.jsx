import './styles.css';
import React, { useState, useEffect } from 'react';
import { MemoGameSettings } from './MemoGameSettings';
import { MemoGameBoard } from './MemoGameBoard';
import { MemoGameScore } from './MemoGameScore';

const charArray = [
  '♪',
  ' ♠',
  '♣',
  '♥',
  '♦',
  '⛛',
  '⛬',
  '⚛',
  '⚑',
  '☺',
  '⛧',
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
  'X',
  'Y',
  'Z',
];

export const MemoGame = () => {
  const deafaultBoardSize = 4;
  const [boardSize, setBoardSize] = useState(deafaultBoardSize);
  const [score, setScore] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameEnded, setGameEnded] = useState(false);
  const [counter, setCounter] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [memoArray, setMemoArray] = useState([]);
  const [firstClickedCard, setFirstClickedCard] = useState(null);
  const [secondClickedCard, setSecondClickedCard] = useState(null);
  //zmienna gdybym chiał mieć tablice o innych wymiarach
  const [getAmountOfChar, setGetAmountOfChar] = useState(
    boardSize * boardSize * 0.5
  );

  useEffect(() => {
    if (memoArray?.find(({ isGuessed }) => isGuessed === false || gameEnded)) {
      console.log('sąnieodganiete');
      return;
    } else {
      console.log('sątylkoodganiete');
      setScore(counter);
      setGameEnded(true);
      setGameStarted(false);
      console.log(gameEnded);
    }
  }, [memoArray]);

  useEffect(() => {
    let countdownInterval;
    if (!countdownInterval && gameStarted) {
      countdownInterval = setInterval(() => {
        setCounter((previousCounter) => previousCounter + 1);
      }, 1000);
    }
    return () => clearInterval(countdownInterval);
  }, [counter, gameStarted]);

  useEffect(() => {
    setCounter(0);
  }, [gameStarted]);

  useEffect(() => {
    setGetAmountOfChar(boardSize * boardSize * 0.5);
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
      getRandomChar();
      deployMemoBoard();
      setGameEnded(false);
    }
  }

  const getRandomChar = () => {
    const shuffledChar = [...charArray].sort(() => 0.5 - Math.random());
    return shuffledChar.slice(0, getAmountOfChar);
  };

  function createMemoElement(character, index) {
    return { character, id: index, isGuessed: false, isVisible: false };
  }
  function deployMemoBoard() {
    const getRandomCharList = getRandomChar();

    const currentArrayList = [...getRandomCharList, ...getRandomCharList]
      .sort(() => 0.5 - Math.random())
      .map((character, index) => createMemoElement(character, index));
    setMemoArray(currentArrayList);
  }
  /**
   *
   * @param {character:string, id:number, isGuessed:boolean, isVisible:boolean} card
   */
  function revealCard(card) {
    if (card.id === firstClickedCard || card.isGuessed) return;
    if (typeof firstClickedCard !== 'number') {
      setFirstClickedCard(card.id);
      return;
    }

    if (typeof secondClickedCard !== 'number') {
      setMoveCount(moveCount + 1);
      setSecondClickedCard(card.id);
      return;
    }
    setSecondClickedCard(null);
    setFirstClickedCard(card.id);
  }

  function classOfElement(card) {
    const classes = ['cell'];
    if (card.isGuessed) {
      classes.push('guessed');
    }
    if (!card.isVisible && !card.isGuessed) {
      classes.push('closed');
    }
    if (card.isVisible && !card.isGuessed && secondClickedCard) {
      classes.push('wrong');
    }
    if (card.isVisible && !card.isGuessed && firstClickedCard) {
      classes.push('guessed');
    }
    return classes.join(' ');
  }

  return (
    <>
      {gameEnded && score !== 0 ? (
        <MemoGameScore
          moveCount={moveCount}
          score={score}
          getAmountOfChar={getAmountOfChar}
          startStopGame={startStopGame}
        />
      ) : null}
      {!gameStarted ? (
        <MemoGameSettings
          boardSize={boardSize}
          setBoardSize={setBoardSize}
          startStopGame={startStopGame}
          gameStarted={gameStarted}
        />
      ) : null}
      <p>Czas gry: {counter}</p>
      {gameStarted || gameEnded ? (
        <MemoGameBoard
          memoArray={memoArray}
          setMemoArray={setMemoArray}
          moveCount={moveCount}
          counter={counter}
          setCounter={setCounter}
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
