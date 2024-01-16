import './styles.css';
export const MenuField = ({ title, children }) => {
  return (
    <div className="menu--field">
      <div className="menu--field--title">{title}</div>
      <div>{children}</div>
    </div>
  );
};
