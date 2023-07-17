import './styles.css';
import starlogo from '/root/projects/pomeranian-bolierplate-public/src/App/Images/star.svg';

export function Exercise() {
  const cars = ['Saab', 'Volvo', 'BMW', 'Skoda', 'Mercedes,'];
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
