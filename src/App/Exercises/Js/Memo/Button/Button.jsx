import './Button.css';

export const Button = ({ onClick, children, isDisabled, isActive }) => {
  const activeClass = isActive ? 'button-active' : '';
  return (
    <div>
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={`button ${activeClass}`}
        isActive={isActive}
      >
        {children}
      </button>
    </div>
  );
};
