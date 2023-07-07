import './Menu.css';

export const Menu = ({ label, children }) => {
  return (
    <div className="menu">
      <div className="Menu-label">{label}</div>
      <div>{children}</div>
    </div>
  );
};
