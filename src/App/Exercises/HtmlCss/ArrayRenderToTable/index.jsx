import './styles.css';

export const ArrayRenderTable = () => {
  const bands = [
    {
      id: 1,
      band: 'The Clash',
      yearFormed: 1976,
      albums: 6,
      mostFamousSong: 'London Calling',
    },
    {
      id: 2,
      band: 'Sex Pistols',
      yearFormed: 1975,
      albums: 1,
      mostFamousSong: 'Anarchy in the UK',
    },
    {
      id: 3,
      band: 'Ramones',
      yearFormed: 1974,
      albums: 14,
      mostFamousSong: 'Blitzkrieg Bop',
    },
    {
      id: 4,
      band: 'The Cure',
      yearFormed: 1976,
      albums: 13,
      mostFamousSong: 'Just Like Heaven',
    },
    {
      id: 5,
      band: 'Joy Division',
      yearFormed: 1976,
      albums: 2,
      mostFamousSong: 'Love Will Tear Us Apart',
    },
    {
      id: 6,
      band: 'Siouxsie and the Banshees',
      yearFormed: 1976,
      albums: 11,
      mostFamousSong: 'Hong Kong Garden',
    },
  ];
  function bandTable({ id, band, yearFormed, albums, mostFamousSong }) {
    return (
      <tr>
        <td>{band}</td> <td>{yearFormed}</td> <td>{albums}</td>
        <td>{mostFamousSong}</td>
      </tr>
    );
  }

  return (
    <div>
      <table className="bands-table">
        <tr>
          <th>Band</th>
          <th>Year Formed</th>
          <th>Albums</th>
          <th>Most Famous Song</th>
        </tr>
        {bands.map(bandTable)}
      </table>
    </div>
  );
};
