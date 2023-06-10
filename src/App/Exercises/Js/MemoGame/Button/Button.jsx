import './Button.css';
export const Button = ({ onClick, children, isDisabled, isActive, id }) => {
  const activeClass = isActive ? 'active' : '';
  return (
    <button
      className={`button ${activeClass}`}
      onClick={onClick}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
