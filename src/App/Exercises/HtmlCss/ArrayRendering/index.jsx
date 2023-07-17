import './styles.css';
import starlogo from '/root/projects/pomeranian-bolierplate-public/src/App/Images/star.svg';

export function Exercise() {
  const cars = [
    { id: 1, make: 'Saab', model: '92B', year: 1953, owner: 'Jon' },

    { id: 2, make: 'Volvo', model: 'C40', year: 2021, owner: 'Jenny' },

    { id: 3, make: 'Audi', model: 'A3', year: 2019, owner: 'Michael' },

    { id: 4, make: 'Tesla', model: 'Model S', year: 2022, owner: 'Sarah' },
    ,
  ];
  return (
    <div className="array-rendering">
      <ol>
        {cars.map(function (car) {
          return (
            <li key={car.make}>
              {car.make} model: {car.model} made in {car.year}
            </li>
          );
        })}
      </ol>
      <table>
        <tr>
          <th>Make</th>
          <th>Model</th>
          <th>Year</th>
        </tr>
        {cars.map(function (car) {
          return (
            <tr key={car.id}>
              <td>{car.make}</td>
              <td>{car.model}</td>
              <td>{car.year}</td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}
