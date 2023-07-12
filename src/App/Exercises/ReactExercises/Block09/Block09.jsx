import { MoreOrLess } from '../MoreOrLess/MoreOrLess';
import { Click5 } from '../Click5/Click5';
import { SeeOrNot } from '../SeeOrNot/SeeOrNot';
import './style.css';
import { MoreOrLessBetween } from '../MoreOrLessBetween/MoreOrLessBetween';
import { Random } from '../Random/Random';

export function Block09() {
  return (
    <div>
      <h1>Blok 9 13-06-2023</h1>
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
