import './styles.css';
import React from 'react';

export function ArrayRendering() {
  const cars = [
    { id: 1, make: 'Saab', model: '92B', year: 1953, owner: 'Jon' },
    { id: 2, make: 'Volvo', model: 'C40', year: 2021, owner: 'Jenny' },
    { id: 3, make: 'Audi', model: 'A3', year: 2019, owner: 'Michael' },
    { id: 4, make: 'Tesla', model: 'Model S', year: 2022, owner: 'Sarah' },
  ];

  return (
    <div className="array-rendering">
      <ul>
        {cars.map(function (car) {
          return (
            <li key={car.make}>
              {car.make} {car.model} produced in {car.year}
            </li>
          );
        })}
      </ul>
      <table>
        <tr>
          <tr>Make</tr>
          <tr>Model</tr>
          <tr>Year</tr>
        </tr>

        {cars.map(function (car) {
          return (
            <tr key={car.make}>
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
