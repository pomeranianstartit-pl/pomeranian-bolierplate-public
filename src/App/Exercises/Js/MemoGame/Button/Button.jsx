import './Button.css';
export const Button = ({ onClick, children, isDisabled, isActive, id }) => {
  const activeClass = isActive ? 'active' : '';
  return (
    <button
      className={`button-memo ${activeClass}`}
      onClick={onClick}
      disabled={isDisabled}
      isActive={isActive}
    >
      {children}
    </button>
  );
};
