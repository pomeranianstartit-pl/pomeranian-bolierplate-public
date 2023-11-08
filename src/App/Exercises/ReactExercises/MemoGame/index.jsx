import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const game_time = 120;
const keys = ['A', 'U', 'K', 'R', '5', 'S', 'P', 'W', 'Q', 'F'];
let counter = 0;
let score = 0;

export const MemoGame = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);

  const [time, setTime] = useState(game_time);
  const [moves, setMoves] = useState(0);
  const [gameCards, setGameCards] = useState([]);
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [showScore, setShowScore] = useState(false);

  const handleStartGame = () => {
    setIsGameStarted(true);
    // setIsGameEnded(false);

    setTime(game_time);
    setMoves(0);

    setFirstCard(null);
    setSecondCard(null);
    counter = 0;
    score = 0;
  };
  const handleStopGame = () => {
    setIsGameStarted(false);

    setFirstCard(null);
    setSecondCard(null);
  };

  function shuffleArray(s) {
    for (let i = s.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [s[i], s[j]] = [s[j], s[i]];
    }
    return s;
  }

  const cardsGenerator = (num) => {
    const newArray = [];
    for (let i = 0; i < num / 2; i++) {
      newArray.push({
        id: i,
        key: keys[i],
        keyID: i,
        isDone: false,
      });
      newArray.push({
        id: 10 + i,
        key: keys[i],
        keyID: i,
        isDone: false,
      });
    }
    const shuffleCards = shuffleArray(newArray);
    setGameCards(shuffleCards);
  };

  const handleClick = (clickedCard) => {
    firstCard ? setSecondCard(clickedCard) : setFirstCard(clickedCard);
    counter++;
    setMoves(counter);
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.keyID === secondCard.keyID) {
        score++;
        setGameCards(
          gameCards.map((card) => {
            const isDone =
              (card.keyID === firstCard.keyID &&
                firstCard.keyID === secondCard.keyID) ||
              card.isDone;
            return {
              ...card,
              isDone: isDone,
            };
          })
        );
        setFirstCard(null);
        setSecondCard(null);
      } else {
        setTimeout(() => {
          setFirstCard(null);
          setSecondCard(null);
        }, 300);
      }
    }
  }, [firstCard, secondCard]);

  useEffect(() => {
    if (isGameStarted) {
      const intervalId = setInterval(() => {
        time > 0 && setTime(time - 1);
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [time, isGameStarted]);

  useEffect(() => {
    if (time === 0) {
      handleStopGame();
      setShowScore(true);
    }
  }, [time]);

  useEffect(() => {
    if (gameCards.every((card) => card.isDone)) {
      handleStopGame();
      setShowScore(true);
    }
  }, [gameCards]);

  let min = Math.floor(time / 60);
  let sec = time % 60;
  sec = sec < 10 ? '0' + sec : sec;

  return (
    <div className="wrapper">
      <NavLink to="/exercise" className="backBtn">
        {'<'}Memo
      </NavLink>

      {showScore ? (
        <h2 className="memo">
          Gratulacje! Twój wynik to: {score} par w czasie {game_time - time}{' '}
          sekund!
        </h2>
      ) : (
        <h2 className="memo">
          Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
        </h2>
      )}
      {isGameStarted ? (
        <div>
          <div className="container_table">
            <div className="container_row">
              <div className="title_memo">Czas gry</div>
              <div className="content">
                <button className="button_memo score">
                  {min}:{sec}
                </button>
              </div>
            </div>
            <div className="container_row">
              <div className="title_memo">Liczba ruchów</div>
              <div className="content">
                <button className="button_memo score">{moves}</button>
              </div>
            </div>
            <div className="container_row">
              <div className="title_memo">Przyciski sterujące</div>
              <div className="content">
                <button onClick={handleStopGame} className="button_memo stop">
                  Pass
                </button>
              </div>
            </div>
          </div>
          <div className="cardsplace">
            {gameCards.map((el) => {
              return (
                <div
                  onClick={() => handleClick(el)}
                  key={el.id}
                  // className="onecard"
                  className={
                    secondCard === el
                      ? 'red onecard'
                      : firstCard === el || el.isDone
                      ? 'green onecard'
                      : 'onecard'
                  }
                >
                  <span>
                    {(firstCard === el ||
                      secondCard === el ||
                      el.isDone === true) &&
                      el.key}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div>
          <div className="container_table">
            <div className="container_row">
              <div className="title_memo">Liczba elementów</div>
              <div className="content">
                <button
                  onClick={() => cardsGenerator(8)}
                  className={
                    gameCards.length === 8
                      ? 'current button_memo'
                      : 'button_memo'
                  }
                >
                  8 elementów
                </button>
                <button
                  // onClick={() =>
                  //   setGameCards(gameCards.map((card) => card * 3))
                  // }
                  onClick={() => cardsGenerator(16)}
                  className={
                    gameCards.length === 16
                      ? 'current button_memo'
                      : 'button_memo'
                  }
                >
                  16 elementów
                </button>
                <button
                  // onClick={() =>
                  //   setGameCards(gameCards.map((card) => card * 5))
                  // }
                  onClick={() => cardsGenerator(20)}
                  className={
                    gameCards.length === 20
                      ? 'current button_memo'
                      : 'button_memo'
                  }
                >
                  20 elementów
                </button>
              </div>
            </div>
            <div className="container_row">
              <div className="title_memo">Przyciski sterujące</div>
              <div className="content">
                <button onClick={handleStartGame} className="button_memo start">
                  START
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
