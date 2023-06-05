import './Board.css';
import { useState } from 'react';

const boardCards = [
  {
    id: 1,
    content: 'A',
    isDiscovered: false,
    hasClicked: false,
  },
  {
    id: 2,
    content: 'A',
    isDiscovered: false,
    hasClicked: false,
  },
  {
    id: 3,
    content: 'U',
    isDiscovered: false,
    hasClicked: false,
  },
  {
    id: 4,
    content: 'U',
    isDiscovered: false,
    hasClicked: false,
  },
  {
    id: 5,
    content: 'K',
    isDiscovered: false,
    hasClicked: false,
  },
  {
    id: 6,
    content: 'K',
    isDiscovered: false,
    hasClicked: false,
  },
  {
    id: 7,
    content: 'R',
    isDiscovered: false,
    hasClicked: false,
  },
  {
    id: 8,
    content: 'R',
    isDiscovered: false,
    hasClicked: false,
  },
  {
    id: 9,
    content: '2',
    isDiscovered: false,
    hasClicked: false,
  },
  {
    id: 10,
    content: '2',
    isDiscovered: false,
    hasClicked: false,
  },
  {
    id: 11,
    content: '8',
    isDiscovered: false,
    hasClicked: false,
  },
  {
    id: 12,
    content: '8',
    isDiscovered: false,
    hasClicked: false,
  },
  {
    id: 13,
    content: '4',
    isDiscovered: false,
    hasClicked: false,
  },
  {
    id: 14,
    content: '4',
    isDiscovered: false,
    hasClicked: false,
  },
  {
    id: 15,
    content: 'Z',
    isDiscovered: false,
    hasClicked: false,
  },
  {
    id: 16,
    content: 'Z',
    isDiscovered: false,
    hasClicked: false,
  },
];

export const Board = () => {
  const [cards, setCards] = useState(boardCards);

  const handleClickCard = (clickedFieldCard) => {
    setCards(
      cards.map((card) => {
        return {
          ...card,
          hasClicked: card.id === clickedFieldCard.id,
          // TODO: Zapytać tutaj Szymona - czym właściwie jest "clickedFieldCard.id" i czemu ma taką wartość jak card.id
        };
      })
    );
  };
  return (
    <div className="board">
      {cards.map((card) => {
        return (
          <div
            className={`board-field ${
              card.hasClicked ? 'board-field-clicked-green' : ''
            }`}
            key={card.id}
            onClick={() => {
              handleClickCard(card);
            }}
          >
            {card.hasClicked ? card.content : ''}
          </div>
        );
      })}
    </div>
  );
};
