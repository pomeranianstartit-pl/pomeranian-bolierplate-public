import mole from '../../../../Images/mole.svg';
import './styles.css';
// isMole: true, false
//tileStatus: correct, incorrect, neutral
export const Tile = ({ onClick, isMole, tileStatus = 'neutral' }) => {
  return (
    <button className={`mole-tile mole-tile-${tileStatus} `} onClick={onClick}>
      {' '}
      {isMole && <img src={mole} alt="obrazek kreta" />}
    </button>
  );
};
