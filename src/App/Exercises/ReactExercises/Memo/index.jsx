import React, { useState, useEffect } from 'react';
import './styles.css';

const ASCII_A = 65;
const alpha = Array.from(new Array(26)).map((_e, i) => i + ASCII_A);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const getInitialCards = (amount) => {
  const shuffled = [...alphabet].sort(() => 0.5 - Math.random());
  console.log(shuffled.slice(0, amount));
  return shuffled.slice(0, amount);
};

function shuffleArray(s) {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

export const Memo = () => {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [solved, setSolved] = useState([]);
  const [disabled, setDisabled] = useState(false);

  useEffect(() => {
    const initialCards = getInitialCards(8);
    const shuffledCards = shuffleArray([...initialCards, ...initialCards]);
    setCards(shuffledCards);
  }, []);

  const handleClick = (index) => {
    if (disabled || flipped.includes(index)) return;

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [firstCard, secondCard] = newFlipped;
      if (cards[firstCard] === cards[secondCard]) {
        setSolved([...solved, firstCard, secondCard]);
        if (solved.length === cards.length - 2) {
          alert('Congratulations! You solved the memo!');
        }
      }
      setDisabled(true);
      setTimeout(() => {
        setFlipped([]);
        setDisabled(false);
      }, 500);
    }
  };

  return (
    <div className="memo-game">
      {cards.map((letter, index) => (
        <div
          key={index}
          className={`card ${flipped.includes(index) ? 'flipped' : ''} ${
            solved.includes(index) ? 'solved' : ''
          }`}
          onClick={() => handleClick(index)}
        >
          {flipped.includes(index) || solved.includes(index) ? letter : ''}
        </div>
      ))}
    </div>
  );
};
