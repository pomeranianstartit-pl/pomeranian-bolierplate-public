import './styles.css';
export const MenuField = ({ title, children }) => {
  return (
    <div className="Menufield-title-children">
      <div className="Menufield-title">{title}</div>
      <div className="Menufield-children">{children}</div>
    </div>
  );
};
