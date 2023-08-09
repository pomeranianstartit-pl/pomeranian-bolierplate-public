import './FieldSection.css';

export function FieldSection({ title, children }) {
  return (
    <div className="field-section">
      <div className="field-section__title">{title}</div>
      {children}
    </div>
  );
}
