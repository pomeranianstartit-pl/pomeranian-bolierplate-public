import './styles.css';

export function Exercise() {
  return (
    <div>
      <div className="divAnimation"></div>

      <div className="waves-wrapper">
        <div className="waves">
          <span style={{ '--i': 1 }}>K</span>
          <span style={{ '--i': 2 }}>u</span>
          <span style={{ '--i': 3 }}>r</span>
          <span style={{ '--i': 4 }}>s</span>
          <span style={{ '--i': 5 }}> </span>
          <span style={{ '--i': 6 }}>f</span>
          <span style={{ '--i': 7 }}>r</span>
          <span style={{ '--i': 8 }}>o</span>
          <span style={{ '--i': 9 }}>n</span>
          <span style={{ '--i': 10 }}>t</span>
        </div>
      </div>

      <div className="slide-in-wrapper"></div>
    </div>
  );
}
