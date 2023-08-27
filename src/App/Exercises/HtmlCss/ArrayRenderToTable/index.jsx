import './styles.css';

const cars = [
  { id: 1, make: 'Saab', model: '92B', year: 1953, owner: 'Jon' },

  { id: 2, make: 'Volvo', model: 'C40', year: 2021, owner: 'Jenny' },

  { id: 3, make: 'Audi', model: 'A3', year: 2019, owner: 'Michael' },

  { id: 4, model: 'Model S', year: 2022, owner: 'Sarah' },

  { id: 5 },
];

function CarRow({ id, make = 'Unknown', model, year, owner }) {
  return (
    <tr>
      <td>{id}</td>

      <td>{make}</td>

      <td>{model}</td>

      <td>{year}</td>

      <td>{owner}</td>
    </tr>
  );
}

export function Exercise() {
  return (
    <table className="table-players">
      <tr>
        <th>ID</th>

        <th>Make</th>

        <th>Model</th>

        <th>Year</th>

        <th>Owner</th>
      </tr>

      {cars.map(CarRow)}
    </table>
  );
}
