import './styles.css';
import { ReactComponent as Arrowdown } from '../Images/arrowdown.svg';
import { ReactComponent as Arrowright } from '../Images/arrowright.svg';
import { useState } from 'react';

export const SingleQuestion = (props) => {
   
  const question = props.question
  const answer = props.answer
  const [isTrue, setIsTrue] = useState(true);
  const clickHandler = () => {
    setIsTrue(!isTrue);
  }

  return (
    // <div>
    //   <h2>{question}</h2>  
    //   <p>{answer}</p>
    // </div>

<div>
<p>
  <h4>
    <li className="linia" onClick={clickHandler}>
      {isTrue && (
        <button>
          <Arrowdown />
        </button>
      )}
      {!isTrue && (
        <button>
          <Arrowright />
        </button>
      )}
      {question}
    </li>
  </h4>
  <p className="paragraf">
    {isTrue && (
      <span>{answer}</span>
    )}
  </p>
</p>
</div>
  );
};