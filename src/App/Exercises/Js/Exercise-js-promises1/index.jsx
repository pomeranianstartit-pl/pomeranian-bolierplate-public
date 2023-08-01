import './styles.css';
import { ExerciseApiPromises } from './ApiPromises/ApiPromises';

export function ExercisePromises() { 
  return (
    <div className="container--promises">
      <ExerciseApiPromises/>
    </div>
          
  );
}