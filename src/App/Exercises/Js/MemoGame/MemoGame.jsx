import React, { useState, useEffect } from 'react';
import './styles.css';
import MemoGameSettings from './MemoGameSettings';
import MemoBoard from './MemoBoard';

const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W',
  'X', 'Y', 'Z'];

const getRandomLetters = (lettersCount) => {
  const shuffled = [...letters].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, lettersCount);
};

function createStageElement(character, index) {
  return { character, id: index, isGuessed: false, isVisible: false, position: Math.random() };
}

export function MemoGame() {
  const [gameStarted, setGameStarted] = useState(false);
  const [boardSizeOptions, setBoardSizeOptions] = useState([
    { label: '8 elementów', boardSizeValue: 4, checked: true },
    { label: '16 elementów', boardSizeValue: 8, checked: false },
    { label: '20 elementów', boardSizeValue: 10, checked: false },
  ]);

  const [gameArray, setGameArray] = useState([]);
  const [clicks, setClicks] = useState(0);
  const [time, setTime] = useState(0);
  const [selectedCards, setSelectedCards] = useState([]);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [gameCompleted, setGameCompleted] = useState(false);
  const [boardDisplayed, setBoardDisplayed] = useState(false);

  useEffect(() => {
    const lettersCount = boardSizeOptions.find((option) => option.checked).boardSizeValue;
    const generatedLetters = getRandomLetters(lettersCount);
    const stage = [...generatedLetters, ...generatedLetters].map((letter, index) =>
      createStageElement(letter, index)
    );
    const sortedStage = stage.sort((a, b) => a.position - b.position);
    setGameArray(sortedStage);
  }, [boardSizeOptions]);

  useEffect(() => {
    let interval;
    if (gameStarted && time < 600 && !gameCompleted) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [gameStarted, time, gameCompleted]);

  useEffect(() => {
    if (gameArray.length > 0) {
      const unmatchedCards = gameArray.filter((item) => !item.isGuessed);
      if (unmatchedCards.length === 0) {
        setShowCongratulations(true);
        setGameCompleted(true);
      }
    }
  }, [gameArray]);

  function handleCellClick(index) {
    if (selectedCards.length === 1) {
      setGameArray((prevGameArray) => {
        const newArray = [...prevGameArray];
        newArray[index].isVisible = true;

        const visibleLetters = newArray.filter((item) => item.isVisible && !item.isGuessed);
        if (visibleLetters.length === 2) {
          const [letter1, letter2] = visibleLetters;
          if (letter1.character === letter2.character) {
            letter1.isGuessed = true;
            letter2.isGuessed = true;
            setSelectedCards([]);
          } else {
            setSelectedCards(visibleLetters);
            setTimeout(() => {
              newArray.forEach((item) => {
                if (!item.isGuessed) {
                  item.isVisible = false;
                }
              });
              setGameArray(newArray);
              setSelectedCards([]);
            }, 750);
          }
        } else {
          setSelectedCards(visibleLetters);
        }

        return newArray;
      });
    } else {
      setGameArray((prevGameArray) => {
        const newArray = [...prevGameArray];
        newArray[index].isVisible = true;
        setSelectedCards([newArray[index]]);
        return newArray;
      });
    }
    setClicks((prevValue) => prevValue + 1);
  }

  function startStopGame() {
    if (gameStarted) {
      setGameArray([]);
      setTime(0);
      setClicks(0);
      setShowCongratulations(false);
      setGameCompleted(false);
    } else {
      const lettersCount = boardSizeOptions.find((option) => option.checked).boardSizeValue;
      const generatedLetters = getRandomLetters(lettersCount);
      const stage = [...generatedLetters, ...generatedLetters].map((letter, index) =>
        createStageElement(letter, index)
      );
      const sortedStage = stage.sort((a, b) => a.position - b.position);
      setGameArray(sortedStage);
    }
    setGameStarted((prev) => !prev);
    setBoardDisplayed(true);
  }

  return (
    <>
      <h3>
        <p>Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary</p>
      </h3>

      <MemoGameSettings
        startStopGame={startStopGame}
        gameStarted={gameStarted}
        boardSizeOptions={boardSizeOptions}
        setBoardSizeOptions={setBoardSizeOptions}
        gameCompleted={gameCompleted}
      />

      {boardDisplayed && (
        <>
          <Timer time={time} />
          <MoveCounter clicks={clicks} />
          {showCongratulations ? (
            <Congratulations
              score={gameArray.length / 2}
              time={time}
              clicks={clicks}
              boardSize={gameArray.length}
              resetGame={startStopGame}
            />
          ) : (
            <ScoreCounter gameArray={gameArray} />
          )}
        </>
      )}

      {gameStarted && (
        <MemoBoard gameArray={gameArray} handleCellClick={handleCellClick} selectedCards={selectedCards} />
      )}
    </>
  );
}

const Timer = ({ time }) => {
  const formattedTime = new Date(time * 1000).toISOString().slice(14, 19);
  return <h3>CZAS GRY: {formattedTime}</h3>;
};

const MoveCounter = ({ clicks }) => {
  return <h3>LICZBA RUCHÓW: {clicks}</h3>;
};

const ScoreCounter = ({ gameArray }) => {
  const matchedPairs = gameArray.filter((item) => item.isGuessed).length / 2;
  return <h3>LICZBA PASUJĄCYCH PAR: {matchedPairs}</h3>;
};

const Congratulations = ({ score, time, clicks, boardSize, resetGame }) => {
  return (
    <div>
      <h3>
        Gratulacje!
        <p>
          Udało Ci się odnaleźć wszystkie pary. Twoja liczba punktów to {score}, w czasie {time} sekund, liczbie ruchów {clicks} i elementów
          tablicy {boardSize}.
        </p>
      </h3>
    </div>
  );
};

export default MemoGame;




