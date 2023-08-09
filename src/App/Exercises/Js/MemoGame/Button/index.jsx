import './index.css';

export const Button = ({ children, isActive, onClick, isDisabled = false }) => {
  const activeClass = isActive ? 'button-active' : '';
  const disabledClass = isDisabled ? 'button-disabled' : '';
  return (
    <button
      onClick={onClick}
      className={`button-base ${activeClass} ${disabledClass}`}
    >
      {children}
    </button>
  );
};
