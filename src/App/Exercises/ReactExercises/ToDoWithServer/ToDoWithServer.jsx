import './styles.css';
import { ToDoForm } from './Features/ToDoForm';

export const ToDoWithServer = () => {
  return (
    <div className="todo">
      <h1>TO DO</h1>

      <h2>Tutaj znajdziesz liste swoich zadań</h2>
      <ToDoForm />
    </div>
  );
};
