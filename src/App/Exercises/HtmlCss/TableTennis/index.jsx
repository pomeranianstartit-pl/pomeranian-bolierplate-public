import './../TableTennis/styles.css';

import TableTennisCol from './TableTennisCol';
import TableTennisRow from './TableTennisRow';

const data = {
  keys: ['Location', 'PLAYER_ID', 'Routing'],
  values: [
    {
      location: 'Cape Verde Islands',
      playerId: '#100120',
      rating: 4,
    },
    {
      location: 'Cape Verde Islands',
      playerId: '#100120',
      rating: 4,
    },
    {
      location: 'Cape Verde Islands',
      playerId: '#100120',
      rating: 2,
    },
  ],
};

export function Exercise() {
  function renderHeader(header) {
    return <TableTennisCol header={header} />;
  }

  function renderRow(row) {
    return <TableTennisRow row={row} />;
  }

  return (
    <div className="table-tennis">
      <table>
        <thead>
          <tr>{data.keys.map(renderHeader)}</tr>
        </thead>
        <tbody>{data.values.map(renderRow)}</tbody>
      </table>
    </div>
  );

  // return (
  //   <div className="table-wrapper2">
  //     {/* 1 tabela */}
  //     <table className="first-table">
  //       <tr>
  //         <th>Location</th>
  //         <th>PLAYER_ID</th>
  //         <th style={{ textAlign: 'right' }}>Rating</th>
  //       </tr>
  //       <tr>
  //         <td>Cape Verde Islands</td>
  //         <td>#100120</td>
  //         <td className="third-column">
  //           <img src={star} alt="star" />
  //           <img src={star} alt="star" />
  //         </td>
  //       </tr>
  //       <tr>
  //         <td>Cape Verde Islands</td>
  //         <td>#100122</td>
  //         <td className="third-column">
  //           <img src={star} alt="star" />
  //           <img src={star} alt="star" />
  //           <img src={star} alt="star" />
  //         </td>
  //       </tr>
  //       <tr>
  //         <td>Cape Verde Islands</td>
  //         <td>#100124</td>
  //         <td className="third-column">
  //           <img src={star} alt="star" />
  //           <img src={star} alt="star" />
  //           <img src={star} alt="star" />
  //           <img src={star} alt="star" />
  //           <img src={star} alt="star" />
  //         </td>
  //       </tr>
  //       <tr>
  //         <td>United States of America</td>
  //         <td>#100126</td>
  //         <td className="third-column">
  //           <img src={star} alt="star" />{' '}
  //         </td>
  //       </tr>
  //       <tr>
  //         <td>United States of America</td>
  //         <td>#100128</td>
  //         <td className="third-column">
  //           <img src={star} alt="star" />
  //           <img src={star} alt="star" />
  //           <img src={star} alt="star" />
  //           <img src={star} alt="star" />
  //           <img src={star} alt="star" />
  //         </td>
  //       </tr>
  //     </table>
  //   </div>
  // );
}
