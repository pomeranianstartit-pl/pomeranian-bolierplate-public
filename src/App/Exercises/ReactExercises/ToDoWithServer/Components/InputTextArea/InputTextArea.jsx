import './styles.css';
export function InputTextArea({ id, placeholder, value }) {
  return (
    <textarea
      id={id}
      placeholder={placeholder}
      value={value}
      className="todo-form__textArea"
    />
  );
}
