import './styles.css';

export function Label({ htmlFor, children }) {
  return (
    <label className="todo-form__label" htmlFor={htmlFor}>
      {children}
    </label>
  );
}
