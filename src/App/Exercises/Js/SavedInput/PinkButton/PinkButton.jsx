import './PinkButton.css';

export const PinkButton = ({ onClick, label }) => {
  return <button className='pink-button' onClick={onClick}>{label}</button>;
};
