import { MoreOrLess } from './Functions/MoreOrLess/MoreOrLess';
import { Click5 } from './Functions/Click5/Click5';
import { SeeOrNot } from './Functions/SeeOrNot/SeeOrNot';
import './style.css';
import { MoreOrLessBetween } from './Functions/MoreOrLessBetween/MoreOrLessBetween';
import { Random } from './Functions/Random/Random';
import { Link } from 'react-router-dom';

export function Block09() {
  return (
    <div>
      <h2 className="todo-container__title">
        <Link to="/exercises/react">⯇ Click 5</Link>
      </h2>
      <div>
        <hr />
        <Click5 />
        <hr />
        <SeeOrNot />
        <hr />
        <MoreOrLess />
        <hr />
        <MoreOrLessBetween />
        <hr />
        <Random />
      </div>
    </div>
  );
}
