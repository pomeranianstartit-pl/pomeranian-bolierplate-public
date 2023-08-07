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
  const [cardsArray, setCardsArray] = useState(initialCardsArray);

  const countClickedCards = () => {
    return cardsArray.reduce((count, element) => {
      return count + (element.hasClicked ? 1 : 0);
    }, 0);
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

  const countCardsByName = (cardName) => {
    return cardsArray.filter(
      (element) => element.hasClicked && element.name === cardName
    ).length;
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
          active: element.active,
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

    // liczymy ile mamy klikniętych kart
    let numberOfClickedCards = countClickedCards();

    if (numberOfClickedCards >= 2) {
      // ignorujemy gdy osiągneliśmy limit klikniętych kart (max 2 karty)
      // do momentu, aż ponownie kliknięte karty zostaną ukryte na planszy
      return;
    } else {
      // oznaczamy kartę jako klikniętą
      markCardAsClicked(clickedCard.id);

      // pomownie zliczamy ile mamy klikniętych kart po oznaczeniu nowego kliknięcia
      numberOfClickedCards = countClickedCards();

      if (numberOfClickedCards !== 2) {
        // jeżeli nie ma dwóch klikniętych kart to czekamy na kolejne kliknięcie i wychodzimy z funkcji
        return;
      }

      // liczymy ile mamy klikniętych kart z tą samą literą
      const sameClickedCardsNumber = countCardsByName(clickedCard.name);

      if (sameClickedCardsNumber === 2) {
        // sukces! dwie odkryte karty mają tą samą literę!
        // Trzeba je deaktywować, żeby nie dało się w nie klikać
        deactivateCardsByCardName(clickedCard.name);

        // No i zwiększamy nasz wynik o jeden punkt :-)
        setScore(score + 1);
      } else {
        // Porażka! Dwie karty nie są takie same,
        // więc trzeba je zaznaczyć, że już nie są kliknięte
        // ale dotyczy to tylko tych aktywnych kart!
        unclickActiveCards();
      }
    }
  };

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
