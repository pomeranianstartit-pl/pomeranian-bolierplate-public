import { MasterHeader } from '../../../Components/MasterHeader/MasterHeader';
import './styles.css';

export const ArrayRenderToTable = () => {
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

  function bandTables({ band, yearFormed, albums, mostFamousSong }) {
    return (
      <tr key={band}>
        <td>{band}</td>
        <td>{yearFormed}</td>
        <td>{albums}</td>
        <td>{mostFamousSong}</td>
      </tr>
    );
  }
  return (
    <div>
      <MasterHeader value="xyz" />
      <div>
        <table className="table-bands-styling">
          <thead className="table-bands-header">
            <tr>
              <td>Band</td>
              <td>Year Formed</td>
              <td>Albums</td>
              <td>Most Famous Song</td>
            </tr>
          </thead>
          <tbody>{bands.map(bandTables)}</tbody>
        </table>
      </div>
    </div>
  );
};
