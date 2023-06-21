import { useState } from 'react';
import './styles2.css';
import star from './star.svg';

export function Tables2() {
  const [rating, setRating] = useState([
    {
      location: 'Cape Verde Islands',
      player_id: '#100120',
      rating: 2,
    },
    {
      location: 'Cape Verde Islands',
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
      <table className="rating-table" cellSpacing={0} border={0}>
        <thead>
          <tr className="table-head">
            {Object.keys(rating[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody className="table-body">
          {rating.map((player) => (
            <tr key={player.location}>
              <td className="location"> {player.location}</td>
              <td className="player_id"> {player.player_id}</td>
              <td className="rating">
                <Star numOfStars={player.rating} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}



