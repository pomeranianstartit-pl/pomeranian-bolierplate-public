import './styles.css';

export const Tile = ({ background = 'neutral', hasMole, onClick }) => {
  if (
    !(
      background === 'neutral' ||
      background === 'correct' ||
      background === 'incorrect'
    )
  )
    console.log('Błędny parametr background', background);
  let moleClass = '';
  if (hasMole) moleClass = 'mole-tile--has-mole';
  return (
    <div
      onClick={onClick}
      className={`mole-tile mole-tile--${background} ${moleClass}`}
    ></div>
  );
};
