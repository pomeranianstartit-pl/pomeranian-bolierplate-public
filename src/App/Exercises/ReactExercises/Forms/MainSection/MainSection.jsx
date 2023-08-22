import './MainSection.css';

export function MainSection({ title, children }) {
  return (
    <div className="main-section">
      <h2>{title}</h2>
      {children}
    </div>
  );
}
