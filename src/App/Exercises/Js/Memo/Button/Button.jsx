import './Button.css';

export const Button = ({
  onClick,
  children,
  isDisabled,
  isActive,
  isControl,
}) => {
  const activeClass = isActive ? 'button-active' : '';
  return (
    <div>
      <button
        onClick={onClick}
        disabled={isDisabled}
        className={`button ${activeClass} ${isControl ? `button-control` : ''}`}
        isActive={isActive}
        isControl={isControl}
      >
        {children}
      </button>
    </div>
  );
};
