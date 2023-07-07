import './Button.css';

export const Button = ({ children, isActive, onClick }) => {
  return (
    <button
      //shorthand if in React

      className={`button ${isActive === true ? 'button-active' : ''}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
