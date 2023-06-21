import './styles.css';
import { useState } from 'react';
import React from 'react';
import star from '../../../Images/star.svg';

export const Tables = () => {
  const [ratings, setRatings] = useState([
    {
      location: 'Cape Verde Islands',
      player_id: '#100120',
      rating: 2,
    },
    {
      location: 'Cape Verde Islands ',
      player_id: '#100122',
      rating: 3,
    },
    {
      location: 'Cape Verde Islands',
      player_id: '#100124',
      rating: 5,
    },
    {
      location: 'United States of America',
      player_id: '#100126',
      rating: 1,
    },
    {
      location: 'United States of America',
      player_id: '#100128',
      rating: 5,
    },
  ]);
  const [foster_pets, setFoster_pets] = useState([
    {
      id: 1,
      name: 'Burek',
      age: 4,
      sex: 'pies',
      breed: 'mieszaniec',
      size: 'średni',
      chip: false,
      sterilized: true,
    },

    {
      id: 2,
      name: 'Łatka',
      age: 7,
      sex: 'suczka',
      breed: 'owczarek niemiecki',
      size: 'duży',
      chip: true,
      sterilized: true,
    },

    {
      id: 3,
      name: 'Reksio',
      age: 12,
      sex: 'pies',
      breed: 'beagle',
      size: 'duży',
      chip: true,
      sterilized: true,
    },

    {
      id: 4,
      name: 'Lessie',
      age: 1,
      sex: 'suczka',
      breed: 'chihuahua',
      size: 'mały',
      chip: false,
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
  const Star = ({ numOfStars }) => {
    const stars = new Array(numOfStars).fill();
    return (
      <>
        {stars.map((_) => (
          <img src={star} alt="rating star" />
        ))}
      </>
    );
  };
  return (
    <>
      <div className="first-table">
        <input
          type="text"
          onChange={(e) => {
            setNewName(e.target.value);
          }}
        />
        <button onClick={addRandomDog}>Dodaj psa</button>
        <table border={1} style={{ width: '100%' }}>
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
      </div>
      <div>
        <table cellSpacing="0" className="second-table">
          <thead>
            <tr>
              {Object.keys(ratings[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ratings.map((row) => (
              <tr key={row.location}>
                <td className="row">{row.location}</td>
                <td className="row">{row.player_id}</td>
                <td className="row rating">
                  <Star numOfStars={row.rating}></Star>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};
