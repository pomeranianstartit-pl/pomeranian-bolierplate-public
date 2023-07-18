import './styles.css';

export function Exercise() {
  const cars = [
    { id: 1, make: 'Saab', model: '92B', year: 1953, owner: 'Jon' },

    { id: 2, make: 'Volvo', model: 'C40', year: 2021, owner: 'Jenny' },

    { id: 3, make: 'Audi', model: 'A3', year: 2019, owner: 'Michael' },

    { id: 4, make: 'Tesla', model: 'Model S', year: 2022, owner: 'Sarah' },
  ];
  return (
    <div className="array-rendering">
      <table>
        <tr>
          <th>Id</th>
          <th>Make</th>
          <th>Model</th>
          <th>Year </th>
          <th>Owner </th>
        </tr>

        {cars.map(function (car) {
          return (
            <tr>
              <td>{car.id}</td>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
              <td>{car.owner}</td>
            </tr>
          );
        })}

        <ul>
          {cars.map(function (car) {
            return <li key={car}>{car.make}</li>;
          })}
        </ul>
      </table>
    </div>
  );
}
