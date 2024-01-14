import './styles.css';
import Star from '../../../Images/rating_star.svg';

import { MyIcon } from './helper';

export function FinalTable() {
  const headingsName = [
    { id: 1, name: 'Location' },
    { id: 2, name: 'PLAYER_ID' },
    { id: 3, name: 'Rating' },
  ];
  const locationData = [
    { id: 1, location: 'Cape Verde Islands', PLAYER_ID: '#100120', Rating: 2 },
    {
      id: 2,
      location: 'Cape Verde Islands',
      PLAYER_ID: '#100122',
      Rating: 3,
    },
    {
      id: 3,
      location: 'Cape Verde Islands ',
      PLAYER_ID: '#100124',
      Rating: 5,
    },
    {
      id: 4,
      location: 'United States of America',
      PLAYER_ID: '#100126',
      Rating: 1,
    },
    {
      id: 5,
      location: 'United States of America',
      PLAYER_ID: '#100128',
      Rating: 5,
    },
  ];

  function ratioStars(number) {
    const Arr = Array.from({ length: number }, (_, i) => ({
      id: i + 1,
    }));

    return (
      <div className="ratio-star-group">
        {Arr.map((elemenent) => (
          <MyIcon key={elemenent.id} ImgSrc={Star} name={'ratio-star-single'} />
        ))}
      </div>
    );
  }

  function headings(props) {
    return (
      <thead>
        <tr>
          {props.map((heading) => (
            <th key={heading.id}>{heading.name}</th>
          ))}
        </tr>
      </thead>
    );
  }

  function bodyTable(data) {
    return (
      <tbody>
        {data.map((data) => (
          <tr key={data.id}>
            <td>{data.location}</td>
            <td>{data.PLAYER_ID}</td>
            <td>{ratioStars(data.Rating)}</td>
          </tr>
        ))}
      </tbody>
    );
  }

  return (
    <table className="player-table">
      {headings(headingsName)}
      {bodyTable(locationData)}
    </table>
  );
}
