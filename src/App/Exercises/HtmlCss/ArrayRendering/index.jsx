import { StarIcon } from '../../../Components/Icons/StarIcon';
import './styles.css';


export function Exercise() {

  const cars = ['Saab', 'Volvo', 'BMW', 'Skoda', 'Mercedes'];

  return <div className='array-rendering'>
                
        <ul>
              {cars.map(function(car) {
          
                return <li>{car}</li>;
              })}
              
        </ul>
 </div>;

}