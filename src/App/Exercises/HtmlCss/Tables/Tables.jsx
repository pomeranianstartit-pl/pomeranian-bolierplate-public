import './styles.css';
import React from 'react';
import { useState } from 'react';

const foster_pets = [
  {
    id: 0,
    name: 'Burek',
    age: 4,
    sex: 'pies',
    breed: 'mieszaniec',
    size: 'średni',
    chip: false,
    sterilized: true,
    id: 0,
  },
  {
    id: 1,
    name: 'Łatka',
    age: 7,
    sex: 'suczka',
    breed: 'owczarek niemiecki',
    size: 'duży',
    chip: true,
    sterilized: true,
  },
  {
    id: 2,
    name: 'Reksio',
    age: 12,
    sex: 'pies',
    breed: 'beagle',
    size: 'duży',
    chip: true,
    sterilized: true,
  },
  {
    id: 3,
    name: 'Lessie',
    age: 1,
    sex: 'suczka',
    breed: 'chihuahua',
    size: 'mały',
    chip: false,
    sterilized: true,
  },
];

export const Tables = () => {
  const [foster_pets, setFoster_pets] = useState([
    {
      id: 0,
      name: 'Burek',
      age: 4,
      sex: 'pies',
      breed: 'mieszaniec',
      size: 'średni',
      chip: false,
      sterilized: true,
      id: 0,
    },
    {
      id: 1,
      name: 'Łatka',
      age: 7,
      sex: 'suczka',
      breed: 'owczarek niemiecki',
      size: 'duży',
      chip: true,
      sterilized: true,
    },
    {
      id: 2,
      name: 'Reksio',
      age: 12,
      sex: 'pies',
      breed: 'beagle',
      size: 'duży',
      chip: true,
      sterilized: true,
    },
    {
      id: 3,
      name: 'Lessie',
      age: 1,
      sex: 'suczka',
      breed: 'chihuahua',
      size: 'mały',
      chip: false,
      sterilized: true,
    },
  ]);

  const addRandomDog = () => {
    setFoster_pets((available_before) => [
      ...available_before,
      {
        id: 16,
        name: 'NoName',
        age: 1,
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
      <button onClick={addRandomDog}>dodaj psa</button>
      <table border={1} style={{ width: '100%' }} className="dog-table">
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
                <input type="checkbox" checked={dog.chip}></input>
              </td>
              <td>
                <input type="checkbox" checked={dog.sterilized}></input>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
