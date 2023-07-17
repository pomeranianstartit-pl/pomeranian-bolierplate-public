import { StarIcon } from '../../../Components/Icons/StarIcon';
import './styles.css';


export function Exercise() {

  const cars = ['Saab', 'Volvo', 'BMW', 'Skoda', 'Mercedes'];



  // Saab => <li>Saab</li>

  // Volvo => <li>Volvo</li>

  // BMW => <li>BMW</li>

  // Skoda => <li>Skoda</li>

  // Mercedes => <li>Mercedes</li>


  
  return <div className='array-rendering'>
                
        <ul>
              {cars.map(function(car) {
          
                return <li>{car}</li>;
              })}
              
        </ul>
 </div>;

}