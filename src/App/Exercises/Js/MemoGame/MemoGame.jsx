import React, { useEffect, useState, useRef } from 'react';
import Confetti from 'react-confetti';
import MemoBoard from './MemoBoard';
import MemoGameSettings from './MemoGameSettings';
import './styles.css';

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
  const [displayedClicks, setDisplayedClicks] = useState(0);
  const [isProcessing, setIsProcessing] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const boardRef = useRef(null); // Referencja do elementu planszy

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
    if (isProcessing || selectedCards.length === 2) {
      return;
    }

    setGameArray((prevGameArray) => {
      const newArray = [...prevGameArray];
      newArray[index].isVisible = true;

      const visibleLetters = newArray.filter((item) => item.isVisible && !item.isGuessed);

      if (visibleLetters.length === 2) {
        setIsProcessing(true);
        const [letter1, letter2] = visibleLetters;
        if (letter1.character === letter2.character) {
          letter1.isGuessed = true;
          letter2.isGuessed = true;
          setSelectedCards([]);
          setIsProcessing(false);
        } else {
          letter1.isGuessed = false;
          letter2.isGuessed = false;
          setSelectedCards(visibleLetters);

          setTimeout(() => {
            newArray.forEach((item) => {
              if (!item.isGuessed) {
                item.isVisible = false;
              }
            });
            setGameArray(newArray);
            setSelectedCards([]);
            setIsProcessing(false);
          }, 750);
        }
      } else {
        setSelectedCards(visibleLetters);
      }

      return newArray;
    });

    setClicks((prevValue) => prevValue + 1);
    if ((clicks + 1) % 2 === 0) {
      setDisplayedClicks((prevValue) => prevValue + 1);
    }
  }

  useEffect(() => {
    if (gameArray.length > 0) {
      const unmatchedCards = gameArray.filter((item) => !item.isGuessed);
      if (unmatchedCards.length === 0) {
        setShowCongratulations(true);
        setGameCompleted(true);
        setShowConfetti(true);
      }
    }
  }, [gameArray]);

  function startStopGame() {
    if (gameStarted) {
      setGameArray([]);
      setTime(0);
      setClicks(0);
      setShowCongratulations(false);
      setGameCompleted(false);
      setDisplayedClicks(0);
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

  useEffect(() => {
    // Funkcja przewijająca planszę w dół po jej wyświetleniu
    const scrollToBottom = () => {
      if (boardRef.current) {
        boardRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Wywołaj funkcję scrollToBottom po wyświetleniu planszy
    if (boardDisplayed) {
      scrollToBottom();
    }
  }, [boardDisplayed]);

  useEffect(() => {
    // Funkcja przewijająca planszę w dół po naciśnięciu przycisku "Start"
    const scrollToBottomOnStart = () => {
      if (gameStarted && boardRef.current) {
        boardRef.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    // Wywołaj funkcję scrollToBottomOnStart po naciśnięciu przycisku "Start"
    scrollToBottomOnStart();
  }, [gameStarted]);

  return (
    <>
            <h4 className="title">
        Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
      </h4>

      <MemoGameSettings
        startStopGame={startStopGame}
        gameStarted={gameStarted}
        boardSizeOptions={boardSizeOptions}
        setBoardSizeOptions={setBoardSizeOptions}
        gameCompleted={gameCompleted}
      />

      {boardDisplayed && (
        <>
          <p className='settings2'>CZAS GRY<button className='buttonCzas' disabled>{` ${new Date(time * 1000).toISOString().slice(14, 19)}`}</button></p>
          <p className='settings2'>LICZBA RUCHÓW<button className='buttonLiczba' disabled>{`${displayedClicks}`}</button></p>
          {showCongratulations ? (
            <div>
              <Congratulations
                score={gameArray.length / 2}
                time={time}
                clicks={displayedClicks}
                boardSize={gameArray.length}
                resetGame={startStopGame}
              />
              {showConfetti && <Confetti width={window.innerWidth} height={window.innerHeight} />}
            </div>
          ) : (
            <ScoreCounter gameArray={gameArray} />
          )}
        </>
      )}

      {gameStarted && !showCongratulations && (
        <div ref={boardRef}>
          <MemoBoard gameArray={gameArray} handleCellClick={handleCellClick} selectedCards={selectedCards} />
        </div>
      )}
    </>
  );
}

const Timer = ({ time }) => {
  const formattedTime = new Date(time * 1000).toISOString().slice(14, 19);
  return <button disabled>{`CZAS GRY ${formattedTime}`}</button>;
};

const MoveCounter = ({ clicks }) => {
  return <button disabled>{`LICZBA RUCHÓW ${clicks}`}</button>;
};

const ScoreCounter = ({ gameArray }) => {
  const matchedPairs = gameArray.filter((item) => item.isGuessed).length / 2;
  return null;
};

const Congratulations = ({ score, time, clicks, boardSize, resetGame }) => {
  return (
    <div>
      <h2 className='congratulations'>
        Gratulacje! Twój wynik to {score} pary w czasie {time} sekund!
      </h2>
    </div>
  );
};

export default MemoGame;




