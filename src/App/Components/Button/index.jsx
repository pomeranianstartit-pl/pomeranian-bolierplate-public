import './styles.css';

// variant value: primary, secondary, tertiary, text

import './styles.css';

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
