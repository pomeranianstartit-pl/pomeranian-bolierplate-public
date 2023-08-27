import './styles.css';

const bands = [
  {
    band: 'The Clash',
    yearFormed: 1976,
    albums: 6,
    mostFamousSong: 'London Calling',
  },
  {
    band: 'Sex Pistols',
    yearFormed: 1975,
    albums: 1,
    mostFamousSong: 'Anarchy in the UK',
  },
  {
    band: 'Ramones',
    yearFormed: 1974,
    albums: 14,
    mostFamousSong: 'Blitzkrieg Bop',
  },
  {
    band: 'The Cure',
    yearFormed: 1976,
    albums: 13,
    mostFamousSong: 'Just Like Heaven',
  },
  {
    band: 'Joy Division',
    yearFormed: 1976,
    albums: 2,
    mostFamousSong: 'Love Will Tear Us Apart',
  },
  {
    band: 'Siouxsie and the Banshees',
    yearFormed: 1976,
    albums: 11,
    mostFamousSong: 'Hong Kong Garden',
  },
];

function BandsRow({ band, yearFormed, albums, mostFamousSong }) {
  return (
    <tr>
      <td>{band}</td>

      <td>{yearFormed}</td>

      <td>{albums}</td>

      <td>{mostFamousSong}</td>
    </tr>
  );
}

export function Exercise() {
  return (
    <table className="table-players">
      <tr>
        <th>Band</th>

        <th>Year</th>

        <th>Albums</th>

        <th>Most famous song</th>
      </tr>

      {bands.map(BandsRow)}
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
