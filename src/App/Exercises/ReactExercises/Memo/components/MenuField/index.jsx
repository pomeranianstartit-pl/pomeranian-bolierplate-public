import './styles.css';

export const MenuField = ({ title = '', children }) => {
  return (
    <div className="menu-field-wrapper">
      <h5>{title}</h5>
      <div>{children}</div>
    </div>
  );
};
