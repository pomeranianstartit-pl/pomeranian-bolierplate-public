import './styles.css';

export const Button = ({ isActive = false, children, onClick = () => {} }) => {
  const active = isActive ? 'button--active' : 'button--disabled';
  const className = `mole-button ${active}`;

  return (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};
