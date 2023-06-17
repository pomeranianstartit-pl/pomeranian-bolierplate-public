import { useEffect, useState } from 'react';
import './Playground.css';

function shuffleArray(s) {
  for (let i = s.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [s[i], s[j]] = [s[j], s[i]];
  }
  return s;
}

const alpha = Array.from(Array(26)).map((e, i) => i + 65);
const alphabet = alpha.map((x) => String.fromCharCode(x));

const getRandomLetters = (amount) => {
  const shuffled = [...alphabet].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, amount);
};

function generateBoard(size) {
  const randomLetters = getRandomLetters(size / 2);

  const letters = randomLetters.map((letter) => {
    return {
      id: null,
      value: letter,
      isPaired: false,
    };
  });
  //  funkcja generateBoard generuje planszę gry na podstawie podanego rozmiaru. Tworzy obiekty reprezentujące pola na planszy, przypisuje im losowe litery oraz ustawia początkowe wartości id i isPaired

  const mergedLetters = [...letters, ...letters];

  return shuffleArray(mergedLetters).map((obj, index) => {
    return { ...obj, id: index + 1 };
  });
}

export const Playground = ({ boardSize, amount, SetAmount, setGameEnded, setMyTime, time, setGameStarted }) => {
  const [firstClickedFieldId, setFirstClickedFieldId] = useState();
  const [secondClickedFieldId, setSecondClickedFieldId] = useState();
  const [board, setBoard] = useState(generateBoard(boardSize));

   // funkcja handleClick obsługuje kliknięcie na obiekt. Jeśli firstClickedFieldId ma ustawioną wartość i jest różne od identyfikatora klikniętego obiektu, to ustawiana jest wartość object.id jako secondClickedFieldId i resetowana jest wartość secondClickedFieldId. W przeciwnym razie, ustawiana jest wartość object.id jako firstClickedFieldId i resetowana jest wartość firstClickedFieldId.

   const handleClick = (object) => {
    const isFirstClickedSetAndIsDifferentThanPrev =
      firstClickedFieldId && firstClickedFieldId !== object.id;
    if (isFirstClickedSetAndIsDifferentThanPrev) {
      setSecondClickedFieldId(object.id);
      resetSecondClickedFieldId();
    } else {
      setFirstClickedFieldId(object.id);
      resetFirstClickedFieldId();
    }
  
    console.log(object);
  };
// funkcja odpowiedzialna za resetowanie elementów
  const resetFirstClickedFieldId = () => {
    setTimeout(() => {
      setFirstClickedFieldId(undefined);
    }, 5000);
  };

  const resetSecondClickedFieldId = () => {
    setTimeout(() => {
      setSecondClickedFieldId(undefined);
    }, 1000);
  };
// funkcja odpowiedzialna za parowanie elementów 
  useEffect(() => {
    if (firstClickedFieldId && secondClickedFieldId) {
      SetAmount(amount+1)
      const firstClickedFieldValue = board.find(
        (item) => item.id === firstClickedFieldId
      ).value;
     
      const secondClickedFieldValue = board.find(
        (item) => item.id === secondClickedFieldId
      ).value;
       // warunek odpowiedzialny czy pierwsze i drugie pole mają wartość id
  

      if (firstClickedFieldValue === secondClickedFieldValue) {
        setBoard(board.map((field)=>{
          return {
            ...field,
             isPaired: field.isPaired ? true : firstClickedFieldId===field.id  || secondClickedFieldId===field.id};
            })
            )
            // jeśli wartość pierwszego pola i drugiego pola jest równa to zwracamy tablicę
            // jeśli pole jest sparowane  (field.isPaired) to pozostaje bez zmian, w orzecuwbyn razie identyfikator field.id odpowiada identyfikatorowi pierwszego klikniętego pola lub identyfikatorowi drugiego pola, to pole zostaje ustawione jako sparowane
            
       
      }
    }
  }, [firstClickedFieldId, secondClickedFieldId, board]);

  console.log(board, 'board');
  console.log(boardSize, 'boardSize');

  useEffect(() => {
    if (board.find((item) => item.isPaired === false)) {
      setGameEnded (false)
    } else {
      setGameStarted (false)
      setGameEnded (true)
      setMyTime (time)
    }
  }, [board]);
  return (
    <div className="board">
      {board.map((element) => {
        const isClicked =
          firstClickedFieldId === element.id || secondClickedFieldId === element.id;
        const ShowValue = isClicked || element.isPaired;
        const clickedFieldClassName = isClicked ? 'field-clicked' : '';
        const pairedFieldClassName = element.isPaired ? 'field-paired' : '';

        return (
          <div 
            key={element.id}
            className={`board-field ${clickedFieldClassName}${pairedFieldClassName}`}
            onClick={() => handleClick(element)}
          >
            {ShowValue && element.value}
          </div>
        );
      })}
    </div>
  );
};