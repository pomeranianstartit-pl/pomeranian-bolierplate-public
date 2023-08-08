import { useEffect, useState } from 'react';

const initialCardsArray = [
  {
    id: 1,
    name: 'A',
    hasClicked: false,
    active: true,
  },
  {
    id: 2,
    name: 'A',
    hasClicked: false,
    active: true,
  },
  {
    id: 3,
    name: 'B',
    hasClicked: false,
    active: true,
  },
  {
    id: 4,
    name: 'B',
    hasClicked: false,
    active: true,
  },
  {
    id: 5,
    name: 'C',
    hasClicked: false,
    active: true,
  },
  {
    id: 6,
    name: 'C',
    hasClicked: false,
    active: true,
  },
  {
    id: 7,
    name: 'D',
    hasClicked: false,
    active: true,
  },
  {
    id: 8,
    name: 'D',
    hasClicked: false,
    active: true,
  },
  {
    id: 9,
    name: 'E',
    hasClicked: false,
    active: true,
  },
  {
    id: 10,
    name: 'E',
    hasClicked: false,
    active: true,
  },
  {
    id: 11,
    name: 'F',
    hasClicked: false,
    active: true,
  },
  {
    id: 12,
    name: 'F',
    hasClicked: false,
    active: true,
  },
  {
    id: 13,
    name: 'G',
    hasClicked: false,
    active: true,
  },
  {
    id: 14,
    name: 'G',
    hasClicked: false,
    active: true,
  },
  {
    id: 15,
    name: 'H',
    hasClicked: false,
    active: true,
  },
  {
    id: 16,
    name: 'H',
    hasClicked: false,
    active: true,
  },
];

export const PlaygroundView = ({ score, setScore }) => {
  const [cardsArray, setCardsArray] = useState(
    initialCardsArray.sort(() => Math.random() - 0.5)
  );

  const getClickedCards = () => {
    return cardsArray.filter((element) => element.hasClicked === true);
  };

  const markCardAsClicked = (cardId) => {
    const newTable = cardsArray.map((element) => {
      return {
        ...element,
        hasClicked: element.hasClicked || element.id === cardId,
      };
    });
    setCardsArray(newTable);
  };

  const deactivateCardsByCardName = (cardName) => {
    setTimeout(() => {
      const newTable = cardsArray.map((element) => {
        return {
          ...element,
          hasClicked: false,
          active: element.name === cardName ? false : element.active,
        };
      });
      setCardsArray(newTable);
    }, 500);
  };

  const unclickActiveCards = () => {
    setTimeout(() => {
      const newTable = cardsArray.map((element) => {
        return {
          ...element,
          hasClicked: false,
        };
      });
      setCardsArray(newTable);
    }, 500);
  };

  const handleCardClick = (clickedCard) => {
    // nie można klikać w nieaktywną lub już klikniętą kartę
    if (clickedCard.active === false || clickedCard.hasClicked === true) {
      return;
    }

    let numberOfClickedCards = getClickedCards().length;

    if (numberOfClickedCards >= 2) {
      return;
    } else {
      // oznaczamy kartę jako klikniętą
      markCardAsClicked(clickedCard.id);
    }
  };

  useEffect(() => {
    const clickedCards = getClickedCards();

    if (clickedCards.length < 2) {
      return;
    }

    const firstClickedLetter = clickedCards[0].name;
    const secondClickedLetter = clickedCards[1].name;

    if (firstClickedLetter === secondClickedLetter) {
      deactivateCardsByCardName(firstClickedLetter);

      setScore(score + 1);
    } else {
      unclickActiveCards();
    }
  }, [cardsArray]);

  return (
    <div className="htm-stage-memo">
      {cardsArray.map((element) => {
        const isDisabledClassName =
          element.active === false ? 'htm-stage-cell-memo--red' : '';

        const isClickedClassName =
          element.active === true && element.hasClicked
            ? 'htm-stage-cell--green'
            : '';

        return (
          <div
            key={element.id}
            onClick={() => handleCardClick(element)}
            className={`htm-stage-cell ${isDisabledClassName} ${isClickedClassName}`}
          >
            {element.hasClicked ? element.name : ''}
          </div>
        );
      })}
    </div>
  );
};
