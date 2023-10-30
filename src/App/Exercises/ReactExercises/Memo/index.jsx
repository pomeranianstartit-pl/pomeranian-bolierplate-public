import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

// gdzie prszechowywac informacje czy ma byc wyswietlane?
// gdzie przechowywac informacje ktora jest kliknieta 1 i 2?

const game_time = 120;
const keys = ['A', 'U', 'K', 'R', '5', 'S', 'P', 'W', 'Q', 'F'];

export const Memo = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [time, setTime] = useState(game_time);
  const [moves, setMoves] = useState(0);
  const [score, setScore] = useState(0);
  const [isGameEnded, setIsGameEnded] = useState(false);
  const [gameCards, setGameCards] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  const handleStartGame = () => {
    setIsGameStarted(true);
    setTime(game_time);
    setScore(0);
    setIsGameEnded(false);
    setMoves(0);
    shuffleCards(num);
  };

  const handlePassGame = () => {
    setIsGameStarted(false);
    setIsGameEnded(true);
    setSelectedCard(null);

    setTime(game_time);
    setMoves(0);
    setScore(0);
  };

  function shuffleArray(s) {
    for (let i = s.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [s[i], s[j]] = [s[j], s[i]];
    }
    return s;
  }

  const shuffleCards = (num) => {
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
    const shuffledCards = shuffleArray(newArray);
    setGameCards(shuffledCards);
  };

  const handleClick = (clickedCard) => {
    if (!isGameStarted || clickedCard.isDone || selectedCard === clickedCard) {
      return; // Nie można kliknąć, jeśli gra się nie zaczęła, karta jest już odnaleziona, lub kliknięto tę samą kartę.
    }

    setMoves(moves + 1);

    if (selectedCard) {
      checkMatch(selectedCard, clickedCard);
    } else {
      setSelectedCard(clickedCard);
    }
  };

  const checkMatch = (firstCard, secondCard) => {
    if (firstCard.key === secondCard.key) {
      // Pasuje
      const updatedCards = gameCards.map((card) => {
        if (card.id === firstCard.id || card.id === secondCard.id) {
          return { ...card, isDone: true };
        }
        return card;
      });
      setGameCards(updatedCards);
      setScore(score + 1);
    }

    setSelectedCard(null);
  };

  // Sprawdzamy, czy wszystkie pary zostały odnalezione

  useEffect(() => {
    if (gameCards.every((card) => card.isDone) && gameCards.length > 0) {
      setIsGameEnded(true);
      setIsGameStarted(false);
    }
  }, [gameCards]);

  useEffect(() => {
    if (isGameStarted) {
      const intervalId = setInterval(() => {
        if (time > 0) {
          setTime(time - 1);
        }
      }, 1000);

      return () => clearInterval(intervalId);
    }
  }, [time, isGameStarted]);

  let min = Math.floor(time / 60);
  let sec = time % 60;
  sec = sec < 10 ? '0' + sec : sec;

  return (
    <div className="wrapper">
      <NavLink to="/exercise" className="backBtn">
        {'<'}Memo
      </NavLink>
      {isGameEnded ? (
        <h2 className="memo-game">
          Gratulacje! Twój wynik to: {score} par w czasie !
        </h2>
      ) : (
        <h2 className="memo-game">
          Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w
          pary.
        </h2>
      )}

      {isGameStarted ? (
        <div>
          <div className="menuPanel">
            {/* CZAS GRY */}
            <div className="option-wrapper">
              <div className="title">Czas gry</div>
              <div className="content">
                <button className="btn_memo time">
                  {min}:{sec}
                </button>
              </div>
            </div>

            {/* WYNIK */}

            <div className="option-wrapper">
              <div className="title">LICZBA RUCHOW</div>
              <div className="content">
                <button className="btn_memo score">{moves}</button>
              </div>
            </div>

            {/* PRZYCISKI STERUJĄCE */}
            <div className="option-wrapper">
              <div className="title">PRZYCISKI STERUJACE</div>
              <div className="content">
                <button className="btn_memo pass" onClick={handlePassGame}>
                  PASS
                </button>
              </div>
            </div>
          </div>

          {/* WIDOK TABELI ODKRYWANIA KART */}
          <div className="cardsplace">
            {gameCards.map((el) => (
              <div
                onClick={() => handleClick(el)}
                className={`onecard ${el.isDone ? 'green' : ''} ${
                  selectedCard === el ? 'red' : ''
                }`}
              >
                <span>{el.isDone || selectedCard === el ? el.key : ''}</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <div className="menuPanel">
            {/* Gra nie wystartowała - LICZBA ELEMENTOW */}
            <div className="option-wrapper">
              <div className="title">LICZBA ELEMENTÓW</div>
              <div className="content">
                <button
                  onClick={() => shuffleCards(8)}
                  className={
                    gameCards.length === 8 ? 'current btn_memo' : 'btn_memo'
                  }
                >
                  8 elementów
                </button>
                <button
                  onClick={() => shuffleCards(16)}
                  className={
                    gameCards.length === 16 ? 'current btn_memo' : 'btn_memo'
                  }
                >
                  16 elementów
                </button>
                <button
                  onClick={() => shuffleCards(20)}
                  className={
                    gameCards.length === 20 ? 'current btn_memo' : 'btn_memo'
                  }
                >
                  20 elementów
                </button>
              </div>
            </div>

            {/* PRZYCISKI STERUJĄCE */}

            <div className="option-wrapper">
              <div className="title">PRZYCISKI STERUJĄCE</div>
              <div className="content">
                <button onClick={handleStartGame} className="btn_memo start">
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
