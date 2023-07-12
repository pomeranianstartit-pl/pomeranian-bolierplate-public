import React from 'react';
import './style.css';
import star from './star.svg';

const ratingTable = [
  {
    Location: 'Cape Verde Islands',
    Player_ID: 100120,
    Rating: 2,
  },
  {
    Location: 'Cape Verde Islands',
    Player_ID: 100120,
    Rating: 5,
  },
  {
    Location: 'Cape Verde Islands',
    Player_ID: 100120,
    Rating: 1,
  },
  {
    Location: 'Cape Verde Islands',
    Player_ID: 100120,
    Rating: 2,
  },
  {
    Location: 'Cape Verde Islands',
    Player_ID: 100121,
    Rating: 4,
  },
];
export function TabesExercise() {
  const znak = '#';
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
      <h3 className="h3">Rating</h3>
      <p>Ćwiczenie z tworzenia tabel</p>
      <div className="table">
        {/* cellSpacing= 0 robi to że nie ma białych przerw między blokami*/}
        <table cellSpacing={0}>
          <thead>
            <tr>
              {Object.keys(ratingTable[0]).map((key) => (
                <th key={key}>{key}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ratingTable.map((text) => (
              <tr key={text.Player_ID} className="dane">
                <td>{text.Location}</td>
                <td>{`${znak}${text.Player_ID}`}</td>
                <td>
                  <Star numOfStars={text.Rating} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
