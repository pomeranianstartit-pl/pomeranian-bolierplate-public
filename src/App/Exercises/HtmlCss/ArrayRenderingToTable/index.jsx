import './styles.css';
import React from 'react';
import { useState } from 'react';

export function ArrayRenderingToTable() {
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
      <table>
        <tr>
          <td>Band</td>
          <td>Year Formed</td>
          <td>Albums</td>
          <td>Most Famous Song</td>
        </tr>

        {bands.map(function (band) {
          return (
            <tr key={band.band}>
              <td>{band.band} </td>
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
