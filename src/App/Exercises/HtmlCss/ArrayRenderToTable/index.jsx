import './style.css';
export function ArrayRenderToTable() {
  const carData = [
    { id: 1, make: 'Saab', model: '92B', year: 1953, owner: 'Jon' },
    { id: 2, make: 'Volvo', model: 'C40', year: 2021, owner: 'Jenny' },
    { id: 3, make: 'Audi', model: 'A3', year: 2019, owner: 'Michael' },
    { id: 4, make: 'Tesla', model: 'Model S', year: 2022, owner: 'Sarah' },
  ];
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

  function bandsToTable(band) {
    return (
      <tr key={band.band}>
        <td>{band.band}</td>
        <td>{band.yearFormed}</td>
        <td>{band.albums}</td>
        <td>{band.mostFamousSong}</td>
      </tr>
    );
  }
  return (
    <div>
      <h2>Renderowanie listy</h2>

      <ul>
        {carData.map((car) => (
          <li key={car.id}>{car.make}</li>
        ))}
      </ul>
      <h2>Renderowanie tabeli z tablicy obiektów</h2>
      <table className="bands-table">
        <thead>
          <tr>
            <th>Band</th>
            <th>Year formed</th>
            <th>Albums</th>
            <th>Most famous song</th>
          </tr>
        </thead>
        <tbody className="kot">{bands.map(bandsToTable)}</tbody>
      </table>
    </div>
  );
}
