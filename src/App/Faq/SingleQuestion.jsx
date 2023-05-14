
import { useState } from 'react';
import './styles.css';

export const SingleQuestion = (props) => {

  const question = props.question
  const answear = props.answear

  // definiujemy propsy

  const [isTrue, setIsTrue] = useState(true);
  const clickHandler = () => {
      setIsTrue(!isTrue)}
// przypisujemy funkcje 


  return (
    <div>
   <div className="block">
        <h2 onClick={clickHandler}>{question} </h2>
        <hr className='line'></hr>
        {isTrue && 
        <p className="answear-text">
           {answear} </p>}
      </div>
    </div> 
    // struktura html w której umieszczamy nasze propsy, treść definiujemy w pliku index
  );
};
