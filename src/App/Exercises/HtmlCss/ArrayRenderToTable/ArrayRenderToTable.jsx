import './styles.css';

export function ArrayRenderToTable() {
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

  const headers = ['Band', 'Year formed', 'Albums', 'Most famous song'];

  return (
    <div>
      <table className="Tabela2">
        <tr className="tableHeader">
          {headers.map((header) => (
            <th>{header}</th>
          ))}
        </tr>
        {bands.map((row) => (
          <tr>
            <td>{row.band}</td>
            <td>{row.yearFormed}</td>
            <td>{row.albums}</td>
            <td>{row.mostFamousSong}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
