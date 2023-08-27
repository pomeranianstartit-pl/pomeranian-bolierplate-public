// import { StarIcon } from '../../../Components/StarIcon';

import './styles.css';

const brands = ['Saab', 'Volvo', 'BMW', 'Skoda', 'Mercedes'];
const cars = [
  { id: 1, make: 'Saab', model: '92B', year: 1953, owner: 'Jon' },
  { id: 2, make: 'Volvo', model: 'C40', year: 2021, owner: 'Jenny' },
  { id: 3, make: 'Audi', model: 'A3', year: 2019, owner: 'Michael' },
  { id: 4, make: 'Tesla', model: 'Model S', year: 2022, owner: 'Sarah' },
];

function CarRow({ id, make = 'unknown', model, year, owner }) {
  return (
    <tr>
      <th>{id}</th>
      <th>{make}</th>
      <th>{model}</th>
      <th>{year}</th>
      <th>{owner}</th>
    </tr>
  );
}

export function Exercise() {
  return (
    <table className="tabela">
      <tr>
        <th>ID</th>
        <th>Make</th>
        <th>Model</th>
        <th>Year</th>
        <th>owner</th>
      </tr>
      {cars.map(CarRow)}
    </table>
  );
}

/* // <table className="tab-players">
//   <tr>
//     <th className="tab-location">Location</th>
//     <th className="tab-player">PLAYER_ID</th>
//     <th className="tab-rating">Rating</th>
//   </tr>

//   <tr>
//     <td className="tab-location">Cape Verde Islands</td>
//     <td className="tab-player">#100120</td>
//     <td className="tab-rating">
//       <StarIcon />

//       <StarIcon />
//     </td>
//   </tr>

//   <tr>
//     <td className="tab-location">Cape Verde Islands</td>
//     <td className="tab-player">#100122</td>
//     <td className="tab-rating">
//       <StarIcon />

//       <StarIcon />

//       <StarIcon />
//     </td>
//   </tr>

//   <tr>
//     <td className="tab-location">Cape Verde Islands</td>
//     <td className="tab-player">#100124</td>
//     <td className="tab-rating">
//       <StarIcon />
//       <StarIcon />
//       <StarIcon />
//       <StarIcon />
//       <StarIcon />
//     </td>
//   </tr>

//   <tr>
//     <td className="tab-location">United States of America</td>
//     <td className="tab-player">#100126</td>
//     <td className="tab-rating">
//       <StarIcon />
//     </td>
//   </tr>

//   <tr>
//     <td className="tab-location">United States of America</td>
//     <td className="tab-player">#100128</td>
//     <td className="tab-rating">
//       <StarIcon />
//       <StarIcon />
//       <StarIcon />
//       <StarIcon />
//       <StarIcon />
//     </td>
//   </tr>

//   <tr>
//     <td className="tab-location">United States of America</td>
//     <td className="tab-player">#100128</td>
//     <td className="tab-rating">
//       <StarIcon />
//       <StarIcon />
//       <StarIcon />
//       <StarIcon />
//       <StarIcon />
//     </td>
//   </tr>
// </table> */
