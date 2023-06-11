import './Button.css';

export const Button = ({ children, isActive, onClick }) => {
  return (
    <button
      className={`button ${isActive ? `button-active` : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
