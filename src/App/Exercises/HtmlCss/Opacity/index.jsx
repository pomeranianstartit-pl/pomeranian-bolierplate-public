import './styles.css';

export function Exercise() {
  return (
    <div className="opacity-wrapper">
      Efekt opacity:
      <div className="div1">
        <p>To jest div pierwszy!</p>
      </div>
      Efekt rgba:
      <div className="div2">
        <p>To jest div drugi!</p>
      </div>
    </div>
  );
}
