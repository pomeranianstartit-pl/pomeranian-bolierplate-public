import React from 'react';
import './style.css';
import { useState } from 'react';

export function Table() {
  const [foster_pets, setFoster_pets] = useState([
    {
      id: 1,
      name: 'Burek',
      age: 4,
      sex: 'pies',
      breed: 'mieszaniec',
      size: 'średni',
      chip: false,
      sterilized: false,
    },
    {
      id: 2,
      name: 'Reks',
      age: 4,
      sex: 'pies',
      breed: 'owczarek niemiecki',
      size: 'duży',
      chip: true,
      sterilized: false,
    },
    {
      id: 3,
      name: 'Buraczka',
      age: 4,
      sex: 'suczka',
      breed: 'chihuahua',
      size: 'mały',
      chip: true,
      sterilized: true,
    },
  ]);
  const [newName, setNewName] = useState('');
  const addRandomDog = () => {
    setFoster_pets((available_before) => [
      ...available_before,
      {
        id: 16,
        name: newName,
        age: 0,
        sex: '-',
        breed: '-',
        size: '-',
        chip: false,
        sterilized: false,
      },
    ]);
  };
  return (
    <>
      <input
        type="text"
        onChange={(e) => {
          setNewName(e.target.value);
        }}
      />
      <button onClick={addRandomDog}>dodaj psa</button>
      <table>
        <thead>
          <tr>
            {Object.keys(foster_pets[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {foster_pets.map((dog) => (
            <tr key={dog.id}>
              <td>{dog.id}</td>
              <td>{dog.name}</td>
              <td>{dog.age}</td>
              <td>{dog.sex}</td>
              <td>{dog.breed}</td>
              <td>{dog.size}</td>
              <td>
                <input type="checkbox" checked={dog.chip} />
              </td>
              <td>
                <input type="checkbox" checked={dog.sterilized} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
