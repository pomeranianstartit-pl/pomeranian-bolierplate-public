import './styles.css';
import { useState } from 'react';
import star from './../../../Images/star.svg';

export function Tables2() {
  const [ratings, setRatings] = useState([
    { location: 'Cape Verde Islands', player_id: '#100120', rating: 2 },
    { location: 'Cape Verde Islands ', player_id: '#100122', rating: 3 },
    { location: 'Cape Verde Islands', player_id: '#100124', rating: 5 },
    { location: 'United States of America', player_id: '#100126', rating: 1 },
    { location: 'United States of America', player_id: '#100128', rating: 5 },
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
  const GrayStar = ({ numOfGrayStars }) => {
    const stars = new Array(numOfGrayStars).fill();
    return (
      <>
        {stars.map((_) => (
          <img className="gray" src={star} alt="gray rating star" />
        ))}
      </>
    );
  };
  return (
    <>
      <h5>&lt; RATING</h5>
      <p>Ćwiczenie z tworzenia tabel</p>
      <table cellSpacing={0} className="table-players">
        <thead>
          <tr>
            {Object.keys(ratings[0]).map((key) => (
              <th key={key}>{key}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {ratings.map((player) => (
            <tr key={player.location}>
              <td>{player.location}</td>
              <td>{player.player_id}</td>
              <td>
                <Star numOfStars={player.rating} />
                <GrayStar numOfGrayStars={5 - player.rating} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
