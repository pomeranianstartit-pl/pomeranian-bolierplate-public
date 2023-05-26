import './styles.css';
import React from 'react';
import { BandsData } from '../../../Components/BandsTable/BandsTable';

export function ArrayOfObjects() {
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

  return (
    <div>
      {bands.map((el) => (
        <BandsData
          band={el.band}
          yearFormed={el.yearFormed}
          albums={el.albums}
          mostFamousSong={el.mostFamousSong}
        />
      ))}
    </div>
  );
}

// export function ArrayOfObjects() {
//   return (
//   <div>
//     <table>
//       <thead>
//         <tr>
//           <th>Band</th>
//           <th>Year formed</th>
//           <th>Albums</th>
//           <th>Most famous song</th>
//         </tr>
//       </thead>
//       <tbody>
//         <tr>
//           <td>The Clash</td>
//           <td>1976</td>
//           <td>6</td>
//           <td>London Calling</td>
//         </tr>
//         <tr>
//           <td>Sex Pistols</td>
//           <td>1975</td>
//           <td>1</td>
//           <td>Anarchy in the UK</td>
//         </tr>
//         <tr>
//           <td>Ramones</td>
//           <td>1974</td>
//           <td>14</td>
//           <td>Blitzkrieg Bop</td>
//         </tr>
//         <tr>
//           <td>The Cure</td>
//           <td>1976</td>
//           <td>13</td>
//           <td>Just Like Heaven</td>
//         </tr>
//         <tr>
//           <td>Joy Division</td>
//           <td>1976</td>
//           <td>2</td>
//           <td>Love Will Tear Us Apart</td>
//         </tr>
//         <tr>
//           <td>Siouxsie and the Banshees</td>
//           <td>1976</td>
//           <td>11</td>
//           <td>Hong Kong Garden</td>
//         </tr>
//       </tbody>
//     </table>
//   </div>)
// }
