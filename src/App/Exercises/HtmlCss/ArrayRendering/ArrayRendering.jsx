import './styles.css';

export const ArrayRendering = () => {
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
      mostFamousSong: 'Anarchyin the UK',
    },
    {
      band: 'Ramones',
      yearFormed: 1974,
      albums: 14,
      mostFamousSong: 'Blitzkrie Bop',
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
        {cars.map((car) => {
          return (
            <li key={car.id}>
              {car.make}({car.year}) - <b>{car.owner}</b>
            </li>
          );
        })}
      </ul>
      Bands:
      <table className="table1">
        <tr className="first_row">
          <th>Bank</th>
          <th>Year Formed</th>
          <th>No. Of Albums</th>
          <th>Most Famous Song</th>
        </tr>

        {bands.map((bands) => {
          return (
            <tr>
              <td>
                <p key={bands.band}>{bands.band}</p>
              </td>
              <td>
                <p key={bands.yearFormed}>{bands.yearFormed}</p>
              </td>
              <td>
                <p key={bands.albums}>{bands.albums}</p>
              </td>
              <td>
                <p key={bands.mostFamousSong}>{bands.mostFamousSong}</p>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};
