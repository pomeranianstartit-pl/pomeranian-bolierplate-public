import './Button.css';

export const Button = ({ onClick, children, isDisabled, isActive, id }) => {
  const activeClass = isActive ? 'active' : '';

  return (
    <button
      onClick={onClick}
      className={`button ${activeClass}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
