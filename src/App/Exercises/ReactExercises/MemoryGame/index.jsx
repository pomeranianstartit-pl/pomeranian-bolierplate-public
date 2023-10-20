import './styles.css';
import { useState, useEffect } from 'react';

const cards = [
  { id: 1, key: 'A', hasClicked: false },
  { id: 2, key: 'U', hasClicked: false },
  { id: 3, key: 'K', hasClicked: false },
  { id: 4, key: 'R', hasClicked: false },
  { id: 3, key: 'K', hasClicked: false },
  { id: 2, key: 'U', hasClicked: false },
  { id: 1, key: 'A', hasClicked: false },
  { id: 4, key: 'R', hasClicked: false },
];

const cards16 = [
  { id: 1, key: 'A', hasClicked: false },
  { id: 2, key: 'U', hasClicked: false },
  { id: 3, key: 'K', hasClicked: false },
  { id: 4, key: 'R', hasClicked: false },
  { id: 5, key: 'K', hasClicked: false },
  { id: 6, key: 'U', hasClicked: false },
  { id: 7, key: 'A', hasClicked: false },
  { id: 8, key: 'R', hasClicked: false },
  { id: 1, key: '1', hasClicked: false },
  { id: 2, key: '2', hasClicked: false },
  { id: 3, key: '3', hasClicked: false },
  { id: 4, key: '4', hasClicked: false },
  { id: 5, key: '3', hasClicked: false },
  { id: 6, key: '2', hasClicked: false },
  { id: 7, key: '1', hasClicked: false },
  { id: 8, key: '4', hasClicked: false },
];

const cards24 = [
  { id: 1, key: 'A', hasClicked: false },
  { id: 2, key: 'U', hasClicked: false },
  { id: 3, key: 'K', hasClicked: false },
  { id: 4, key: 'R', hasClicked: false },
  { id: 5, key: 'K', hasClicked: false },
  { id: 6, key: 'U', hasClicked: false },
  { id: 7, key: 'A', hasClicked: false },
  { id: 8, key: 'R', hasClicked: false },
  { id: 1, key: '1', hasClicked: false },
  { id: 2, key: '2', hasClicked: false },
  { id: 3, key: '3', hasClicked: false },
  { id: 4, key: '4', hasClicked: false },
  { id: 5, key: '3', hasClicked: false },
  { id: 6, key: '2', hasClicked: false },
  { id: 7, key: '1', hasClicked: false },
  { id: 8, key: '4', hasClicked: false },
  { id: 9, key: '8', hasClicked: false },
  { id: 10, key: '7', hasClicked: false },
  { id: 11, key: '6', hasClicked: false },
  { id: 11, key: '6', hasClicked: false },
  { id: 10, key: '7', hasClicked: false },
  { id: 9, key: '8', hasClicked: false },
  { id: 12, key: '9', hasClicked: false },
  { id: 12, key: '9', hasClicked: false },
];
const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

const keys = ['A', 'U', 'K', 'R', '1', '2', '3', '4', '6', '7', '8', '9'];
const game_time = 120;
export const MemoryGame = () => {
  const [isGameStarted, setIsGameStarted] = useState(false);
  const [time, setTime] = useState(game_time);
  const [moves, setMoves] = useState(2);
  const [gameCards, setGameCards] = useState([]);
  const [firstKeyID, setFirstKeyID] = useState('');
  const [secondKeyID, setSecondKeyID] = useState('');

  const [initialTime, setInitialTime] = useState(game_time);
  const [isGameEnded, setisGameEnded] = useState(false);
  const [score, setScore] = useState(0);

  const handleStartGame = () => {
    setGameCards(shuffleArray(gameCards));
    setisGameEnded(false);
    setTime(game_time);
    setScore(0);
    setIsGameStarted(true);
  };

  const handleStopGame = () => {
    setIsGameStarted(false);
    setisGameEnded(true);
    setFirstKeyID('');
    setSecondKeyID('');
  };
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
    newArray.push({ id: i, key: keys[i], keyID: i, isDone: false });
    newArray.push({ id: 10 + i, key: keys[i], keyID: i, isDone: false });
  }
  const shuffleCards = shuffleArray(newArray);
  setGameCards(shuffleCards);
};

const handleClickCard = (clickedCard, isItemPresent) => {
  // Ustawienie ktore pole zostalo klikniete
  setGameCards(
    gameCards.map((item) => {
      return {
        ...card,
        hasClicked: card.id === clickedCard.id,
      };
    })
  );
  // Reset ktore pole zostalo klikniete + aktualizacja wyniku
  resetClickCard();
  // scoreUpdate();

  // Losowanie nowego miejsca kreta jezeli zostanie trafiony
  if (
    (card.keyID === firstKeyID || card.keyID === secondKeyID) &&
    firstKeyID === secondKeyID
  )
    return (
      <div className="memory-game">
        <h2>MEMO</h2>
        <h2>
          Gra polegająca na zapamiętywaniu odkrytych kafli i łączeniu ich w pary
        </h2>

        {isGameStarted ? (
          <div>
            {/* CZAS do końca  */}
            <div className="option-wrapper">
              <div className="title">Czas do końca</div>
              <div className="content">
                {/* disable true oznacza, że przycisk jest wyłączony */}
                <button disabled={true}>{time}</button>
              </div>
            </div>

            {/* WYNIK */}
            <div className="option-wrapper">
              <div className="title">Wynik</div>
              <div className="content">
                <button disabled={true}>{score}</button>
              </div>
            </div>

            {/* PRZYCISKI STERUJĄCE */}
            <div className="option-wrapper">
              <div className="title">Przyciski sterujące</div>
              <div className="content">
                <button className="stop" onClick={handleStopGame}>
                  PASS
                </button>
              </div>
            </div>

            {/* WIDOK gry memo  */}
            {/*  */}
            <div className="board">
              {gameCards.map((item, index) => (
                <div className={'card'} onClick={() => handleClick(item.id)}>
                  {item.key}
                </div>
              ))}
            </div>

            <div className="game-over">
              Gratulacje, zdobyłeś {score} punktów
            </div>
          </div>
        ) : (
          <div>
            <div className="option-wrapper">
              {/* LICZBA ELEMENTÓW */}

              {/* LICZBA Kart */}
              <div className="option-wrapper">
                <div className="title">Liczba kart</div>
                <div className="content">
                  <button
                    className={numCards === 8 ? 'current' : ''}
                    onClick={() => setNumCards(8)}
                  >
                    8 kart
                  </button>
                  <button
                    className={numCards16 === 16 ? 'current' : ''}
                    onClick={() => setNumCards16(16)}
                  >
                    16 kart
                  </button>
                  <button
                    className={numCards24 === 24 ? 'current' : ''}
                    onClick={() => setNumCards24(24)}
                  >
                    24 karty
                  </button>
                </div>
              </div>

              {/* PRZYCISKI STERUJĄCE */}
              <div className="option-wrapper">
                <div>
                  <div className="content">
                    <div className="title">PRZYCISKI STERUJĄCE</div>

                    <button onClick={handleStartGame}>Start</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    );
};
