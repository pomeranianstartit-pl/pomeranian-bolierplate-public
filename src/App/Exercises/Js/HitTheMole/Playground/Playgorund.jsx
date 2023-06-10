import React, { useEffect, useState } from 'react';
import './Playground.css';
import { ReactComponent as Mole } from '../../../../Images/Mole.svg';

// Lista elementów - pól, na których pojawia się kret
const fields = [
  { id: 1, hasClicked: false },
  { id: 2, hasClicked: false },
  { id: 3, hasClicked: false },
  { id: 4, hasClicked: false },
  { id: 5, hasClicked: false },
  { id: 6, hasClicked: false },
  { id: 7, hasClicked: false },
  { id: 8, hasClicked: false },
  { id: 9, hasClicked: false },
  { id: 10, hasClicked: false },
];

// Funkcja odpowiedzialna za losowanie pojawienia się elementu
const getRandomInt = (max) => Math.floor(Math.random() * max) + 1;

export const Playground = ({ score, setScore }) => {
  const [modifiedFields, setModifiedFields] = useState(fields);
  const [fieldWithMoleId, setFieldWithMoleId] = useState(getRandomInt(10));

  // Obsługa aktualizacji punktacji
  const handleScoreUpdate = (isMolePresent) => {
    if (isMolePresent) {
      setScore(score + 1);
    } else {
      setScore(score - 1);
    }
  };

  // Obsługa kliknięcia na pole - sprawdza czy kret był obecny
  const handleClick = (clickedField) => {
    const updatedFields = modifiedFields.map((field) => {
      if (field.id === clickedField) {
        return {
          ...field,
          hasClicked: true,
        };
      }
      return field;
    });
    setModifiedFields(updatedFields);
    handleScoreUpdate(clickedField === fieldWithMoleId);
  };

  const resetClickFlags = () => {
    setTimeout(() => {
      setModifiedFields(
        modifiedFields.map((field) => ({
          ...field,
          hasClicked: false,
        }))
      );
    }, 300);
  };

  useEffect(() => {
    // Zaktualizuj pole z kretami co sekundę
    const interval = setInterval(() => {
      setFieldWithMoleId(getRandomInt(10));
    }, 300);

    // Zwróć funkcję czyszczącą interwał przy czyszczeniu komponentu
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="playground">
      {modifiedFields.map((field) => {
        const isMolePresent = field.id === fieldWithMoleId;
        const isClickedFieldWithMole = isMolePresent && field.hasClicked ? 'field-green' : '';
        const isClickedFieldWithoutMole = !isMolePresent && field.hasClicked ? 'field-red' : '';

        return (
          // Renderowanie pola
          <div
            className={`field ${isClickedFieldWithMole} ${isClickedFieldWithoutMole}`}
            key={field.id}
            onClick={() => {
              handleClick(field.id);
              resetClickFlags();
            }}
          >
            {isMolePresent && <Mole />}
          </div>
        );
      })}
    </div>
  );
};
