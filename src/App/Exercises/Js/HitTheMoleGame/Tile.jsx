import './styles.css';
import mole from '../../../Images/Mole.svg';

// isMole:true | false
// tileStatus correct | incorrect | neutral

export const Tile = ({ onClick, isMole, tileStatus = 'neutral' }) => {
  return (
    <button className={`mole-tile mole-tile-${tileStatus} `} onClick={onClick}>
      {isMole && <img src={mole} alt="Kret obrazek" />}
    </button>
  );
};
