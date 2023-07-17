import { useState } from 'react';

import './styles.css';

function camelCaseToNormalText(input) {
  // zamienia pierwszą literę na wielką oraz dodaje spacje przed każdą dużą literą, które nie są na początku stringu

  return (
    input

      // Wstawia spację przed wielką literą, która nie jest na początku stringu

      .replace(/([A-Z])/g, ' $1')

      // Zamienia pierwszą literę na wielką

      .replace(/^./, function (str) {
        return str.toUpperCase();
      })
  );
}

export function ArrayRenderingToTable() {
  const [sortConfig, setSortConfig] = useState(null);

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

  function sortBySortConfig(a, b) {
    if (sortConfig !== null) {
      if (a[sortConfig] < b[sortConfig]) {
        return -1;
      }

      if (a[sortConfig] > b[sortConfig]) {
        return 1;
      }

      return 0;
    }
  }

  return (
    <div className="array-render-to-table">
      <table>
        <tr>
          {Object.keys(bands[0]).map(function (key) {
            return (
              <th key={key} onClick={() => setSortConfig(key)}>
                {camelCaseToNormalText(key)}
              </th>
            );
          })}
        </tr>

        {bands.sort(sortBySortConfig).map(function (band) {
          return (
            <tr key={band.band}>
              <td>{band.band}</td>

              <td>{band.yearFormed}</td>

              <td>{band.albums}</td>

              <td>{band.mostFamousSong}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

/*export function ArrayRenderingToTable() {
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
    <div className="array-rendering-to-table">
      <ol>
        {bands.map(function (bands) {
          return (
            <li key={bands.id}>
              {bands.band}
              {bands.yearFormed} {bands.albums} {bands.mostFamousSong}
            </li>
          );
        })}
      </ol>
      <table className="array-rendering-to-table table">
        <tr>
          <th>Band</th>
          <th>Year Formed</th>
          <th>Albums</th>
          <th>Most Famous Song</th>
        </tr>

        {bands.map(function (bands) {
          return (
            <tr key={bands.id}>
              <td>{bands.band}</td>
              <td>{bands.yearFormed}</td>
              <td>{bands.albums}</td>
              <td>{bands.mostFamousSong}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );*/
