import './styles.css';

export const Menu = ({ label, children }) => {
  return (
    <div className="menu-wrapper">
      <p className="menu-label">{label}</p>
      <div className="menu-content">{children}</div>
    </div>
  );
};
