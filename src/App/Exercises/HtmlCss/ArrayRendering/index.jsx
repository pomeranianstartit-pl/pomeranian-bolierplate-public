import './styles.css';

export function ArrayRendering() {
  const cars = ['Saab', 'Volvo', 'BMW', 'Skoda', 'Mercedes'];

  return (
    <div>
      <ul>
        {cars.map(function (car) {
          return <li>{car}</li>;
        })}
      </ul>
    </div>
  );
}
