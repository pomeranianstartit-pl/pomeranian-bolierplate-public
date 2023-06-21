import { useState } from 'react';
import star from './star.svg';
import './styles.css';

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

export const Table2 = () => {
  const [ratings, setRating] = useState([
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
      rating: 4,
    },
  ]);
  return (
    <>
      <table cellSpacing="0" className="table2">
        <thead>
          <tr>
            {Object.keys(ratings[0]).map((th) => (
              <th key={th}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ratings.map((row) => (
            <tr key={row.player_id}>
              <td>{row.location}</td>
              <td>{row.player_id}</td>
              <td style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Star numOfStars={row.rating} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};
