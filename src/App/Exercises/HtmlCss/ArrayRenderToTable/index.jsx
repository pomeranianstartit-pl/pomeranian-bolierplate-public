import './styles.css';

// const brands = ['Saab', 'Volvo', 'BMW', 'Skoda', 'Mercedes'];
const cars = [
  { id: 1, make: 'Saab', model: '92B', year: 1953, owner: 'Jon' },
  { id: 2, make: 'Volvo', model: 'C40', year: 2021, owner: 'Jenny' },
  { id: 3, make: 'Audi', model: 'A3', year: 2019, owner: 'Michael' },
  { id: 4, make: 'Tesla', model: 'Model S', year: 2022, owner: 'Sarah' },
];

function CarRow({ id, make = 'unknown', model, year, owner }) {
  return (
    <tr>
      <th>{id}</th>
      <th>{make}</th>
      <th>{model}</th>
      <th>{year}</th>
      <th>{owner}</th>
    </tr>
  );
}

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

function Bands({ band, yearFormed, albums, mostFamousSong }) {
  return (
    <tr>
      <th>{band}</th>
      <th>{yearFormed}</th>
      <th>{albums}</th>
      <th>{mostFamousSong}</th>
    </tr>
  );
}

export function Exercise() {
  return (
    <div>
      <table className="tabela">
        <tr>
          <th>ID</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
          <th>owner</th>
        </tr>
        {cars.map(CarRow)}
      </table>

      <br></br>
      <br></br>

      <table className="tabela">
        <tr>
          <th>BAND</th>
          <th>YEAR</th>
          <th>ALBUMS</th>
          <th>MOST FAMOUS SONG</th>
        </tr>
        {bands.map(Bands)}
      </table>
    </div>
  );
}
