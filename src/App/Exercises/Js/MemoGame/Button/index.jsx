import './index.css';

export const Button = ({ children, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`button-base ${isActive ? 'button-active' : ''}`}
    >
      {children}
    </button>
  );
};
