import './styles.css';

export function ArrayRendering() {
  const cars = [
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

  return (
    <div>
      Auta:
      <ul>
        {cars.map(({ id, make, model, owner, year }) => {
          return (
            <li key={id}>
              {make} {model} ({year}) - <b>{owner}</b>
            </li>
          );
        })}
      </ul>
      <table className="bands-table">
        <tr className="first">
          <th>Band</th>
          <th>Year formed</th>
          <th>No. of albums</th>
          <th>Most famous song</th>
        </tr>

        {bands.map(({ band, yearFormed, albums, mostFamousSong }) => {
          return (
            <tr key={band}>
              <td>{band}</td>
              <td>{yearFormed}</td>
              <td>{albums}</td>
              <td>{mostFamousSong}</td>
            </tr>
          );
        })}
        <tr>
          <td colspan="2">Total albums</td>
          <td colspan="2">77</td>
        </tr>
      </table>
    </div>
  );
}
