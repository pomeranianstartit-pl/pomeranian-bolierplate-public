import './styles.css';

// export function Exercise() {
//   return (
//     <div className="wrapper">
//       <h2>Ćwiczenie z tworzenia tabel</h2>
//       <table className="table-tennis">
//         <thead>
//           <tr>
//             <th>Location</th>
//             <th>PLAYER_ID</th>
//             <th>Rating</th>
//           </tr>
//         </thead>
//         <tbody>
//           <tr>
//             <td>Cape Verde Islands</td>
//             <td>#100120</td>
//             <td>
//               <StarIcon />
//               <StarIcon />
//             </td>
//           </tr>
//           <tr>
//             <td>Cape Verde Islands</td>
//             <td>#100122</td>
//             <td>
//               <StarIcon />
//               <StarIcon />
//               <StarIcon />
//             </td>
//           </tr>
//           <tr>
//             <td>Cape Verde Islands</td>
//             <td>#100124</td>
//             <td>
//               <StarIcon />
//               <StarIcon />
//               <StarIcon />
//               <StarIcon />
//               <StarIcon />
//             </td>
//           </tr>
//           <tr>
//             <td>United States of America</td>
//             <td>#100126</td>
//             <td>
//               <StarIcon />
//             </td>
//           </tr>
//           <tr>
//             <td>United States of America</td>
//             <td>#100128</td>
//             <td>
//               <StarIcon />
//               <StarIcon />
//               <StarIcon />
//               <StarIcon />
//               <StarIcon />
//             </td>
//           </tr>
//         </tbody>
//       </table>
//     </div>
//   );
// }

import TableTennisRow from './components/TableTennisRow';
import TableTennisHead from './components/TableTennisHead';

const data = {
  keys: ['Location', 'PLAYER_ID', 'Rating'],
  values: [
    {
      location: 'Cape Verde Islands',
      playerId: '#100120',
      rating: 2,
    },
    {
      location: 'Cape Verde Islands',
      playerId: '#100122',
      rating: 3,
    },
    {
      location: 'Cape Verde Islands',
      playerId: '#100124',
      rating: 5,
    },
    {
      location: 'United States of America',
      playerId: '#100126',
      rating: 1,
    },
    {
      location: 'United States of America',
      playerId: '#100128',
      rating: 5,
    },
  ],
};

export function Exercise() {
  function renderHeader(header) {
    return <TableTennisHead header={header} />;
  }

  function renderRow(row) {
    return <TableTennisRow row={row} />;
  }

  return (
    <div className="wrapper">
      <h2>Ćwiczenie z tworzenia tabel</h2>
      <table className="table-tennis">
        <thead>
          <tr>{data.keys.map(renderHeader)}</tr>
        </thead>
        <tbody>{data.values.map(renderRow)}</tbody>
      </table>
    </div>
  );
}

// const test = {
//   title: 'Table Tennis',
//   description: 'Table description',
// };
