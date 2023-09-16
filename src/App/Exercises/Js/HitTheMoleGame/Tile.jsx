import './style.css';
import mole from '../../../Images/Mole.svg';

// isMole:true | false
// tileStatus correct | incorrect | neutral

export const Tile = ({ onClick, isMole }) => {
  return (
    <button
      className={`mole-tile mole-tile-neutral ${
        isMole ? 'mole-with-mole' : ''
      }`}
      onClick={onClick}
    >
      {isMole && <img src={mole} alt="Obrazek kreta" />}
    </button>
  );
};
