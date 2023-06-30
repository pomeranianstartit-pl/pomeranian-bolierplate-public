import './Menu.css';
// export const NazwaFunkcji = ({props, props}) => { return (co zwracamy) <>struktura Html z propsami</>}
export const Menu = ({ children, label }) => {
  return (
    <div className="menu">
      <div className="menu-label">{label}</div>
      {children}
    </div>
  );
};
export default Menu;

// do zmiennej Menu chcemy przypisać funkcję strzałkową 
// funkcja Menu ma renderować elementy

// propsy:
// label - etykieta menu
// children czyli zawartość - wszystko co sie zawrze
