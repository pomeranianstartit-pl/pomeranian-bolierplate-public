import './styles.css';

const cars = [
  { id: 1, make: 'Saab', model: '92B', year: 1953, owner: 'Jon' },

  { id: 2, make: 'Volvo', model: 'C40', year: 2021, owner: 'Jenny' },

  { id: 3, make: 'Audi', model: 'A3', year: 2019, owner: 'Michael' },

  { id: 4, model: 'Model S', year: 2022, owner: 'Sarah' },

  { id: 5 },
];

function CarRow({ id, make = 'Unknown', model, year, owner }) {
  return (
    <tr>
      <td>{id}</td>

      <td>{make}</td>

      <td>{model}</td>

      <td>{year}</td>

      <td>{owner}</td>
    </tr>
  );
}

export function Exercise() {
  return (
    <table className="table-players">
      <tr>
        <th>ID</th>

        <th>Make</th>

        <th>Model</th>

        <th>Year</th>

        <th>Owner</th>
      </tr>

      {cars.map(CarRow)}
    </table>
  );
}

/* <ul> 
        {brands.map((brand) => (
          <li>{brand} +</li>
        ))}
      </ul>
      <ul>
        {names.map((names) => (
          <li>{names} +</li>
        ))}
      </ul>
      <ul>
        {cars.map((car) => (
          <li>{car} +</li>
        ))}
      </ul>*/

// <>
//   <table>
//     <tr>
//       <th>Location</th>
//       <th>PLAYER_ID</th>
//       <th>Rating</th>
//     </tr>
//     <tr>
//       <td>Cape Verde Islands</td>
//       <td>#100120</td>
//       <td>
//         <img src={starSVG} alt="Brak SVG" />
//         <img src={starSVG} alt="Brak SVG" />
//       </td>
//     </tr>
//     <tr>
//       <td>Cape Verde Islands</td>
//       <td>#100122</td>
//       <td>
//         <img src={starSVG} alt="Brak SVG" />
//       </td>
//     </tr>
//     <tr>
//       <td>Cape Verde Islands</td>
//       <td>#100124</td>
//       <td>
//         <img src={starSVG} alt="Brak SVG" />
//         <img src={starSVG} alt="Brak SVG" />
//         <img src={starSVG} alt="Brak SVG" />
//         <img src={starSVG} alt="Brak SVG" />
//         <img src={starSVG} alt="Brak SVG" />
//       </td>
//     </tr>
//     <tr>
//       <td>United States of America</td>
//       <td>#100126</td>
//       <td>
//         <img src={starSVG} alt="Brak SVG" />
//       </td>
//     </tr>
//     <tr>
//       <td>United States of America</td>
//       <td>#100128</td>
//       <td>
//         <img src={starSVG} alt="Brak SVG" />
//         <img src={starSVG} alt="Brak SVG" />
//         <img src={starSVG} alt="Brak SVG" />
//         <img src={starSVG} alt="Brak SVG" />
//         <img src={starSVG} alt="Brak SVG" />
//       </td>
//     </tr>
//   </table>
// </>

/*import { StarIcon } from '../../../Components/Icons/StarIcon';

import './styles.css';

 

export function Exercise() {

  return (

    <table className="table-players">

      <tr>

        <th className="table-location">Location</th>

        <th className="table-player">PLAYER_ID</th>

        <th className="table-rating">Rating</th>

      </tr>

      <tr>

        <td className="table-location">Cape Verde Islands</td>

        <td className="table-player">#100120</td>

        <td className="table-rating">

          <StarIcon />

          <StarIcon />

        </td>

      </tr>

      <tr>

        <td className="table-location">Cape Verde Islands</td>

        <td className="table-player">#100122</td>

        <td className="table-rating">

          <StarIcon />

          <StarIcon />

          <StarIcon />

        </td>

      </tr>

      <tr>

        <td className="table-location">Cape Verde Islands</td>

        <td className="table-player">#100124</td>

        <td className="table-rating">

          <StarIcon />

          <StarIcon />

          <StarIcon />

          <StarIcon />

          <StarIcon />

        </td>

      </tr>

      <tr>

        <td className="table-location">United States of America</td>

        <td className="table-player">#100126</td>

        <td className="table-rating">

          <StarIcon />

        </td>

      </tr>

      <tr>

        <td className="table-location">United States of America</td>

        <td className="table-player">#100128</td>

        <td className="table-rating">

          <StarIcon />

          <StarIcon />

          <StarIcon />

          <StarIcon />

          <StarIcon />

        </td>

      </tr>

      <tr>

        <td className="table-location">United States of America</td>

        <td className="table-player">#100128</td>

        <td className="table-rating">

          <StarIcon />

          <StarIcon />

          <StarIcon />

          <StarIcon />

          <StarIcon />

        </td>

      </tr>

    </table>

  );

} */
