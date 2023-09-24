import './Menu.css';

export const Menu = ({ label, children }) => {
  return (
    <div className="menu">
      <div className="menu-label">{label}</div>
      {children}
    </div>
  );
};
