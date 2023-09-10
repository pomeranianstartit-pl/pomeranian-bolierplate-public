import './styles.css';

//varian value - primary | secondary | tertiary

export const Button = ({
  children,
  onClick,
  variant = 'primary',
  ...otherProps
}) => {
  return (
    <button
      className={`main-button main-button-${variant}`}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
};
