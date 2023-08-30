import './styles.css';
export function Input({ value, placeholder, id }) {
  return (
    <input
      className="todo-form__input"
      id={id}
      value={value}
      placeholder={placeholder}
    />
  );
}
