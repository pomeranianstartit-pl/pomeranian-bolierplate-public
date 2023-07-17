import './styles.css';
import { Star } from '../../../Components/Icons/Star';

export function ArrayRendering() {
  const cars = ['Saab', 'Volvo', 'BMW', 'Skoda', 'Mercedes'];

  return (
    <div className="array-rendering">
      <ul>
        {cars.map(function (car) {
          return <li>{car}</li>;
        })}
      </ul>
    </div>
  );
}
