import './styles.css';

export const Button = ({ children, variant = 'primary', onClick }) => {
  return (
    <button className={`todo-btn todo-btn--${variant}`} onClick={onClick}>
      {children}
    </button>
  );
};
