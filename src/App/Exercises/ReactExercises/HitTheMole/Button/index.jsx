import './styles.css';

export const Button = ({ children, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`button_base ${isActive ? 'button--active' : ''}`}
    >
      {children}
    </button>
  );
};
