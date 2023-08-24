import './styles.css';
import { Button, Label, Input, InputTextArea } from '../Components/index';

export const ToDoForm = () => {
  return (
    <div>
      <p>Dodawanie zadania</p>
      <form className="todo-form">
        <Label htmlFor="title">Tytuł</Label>
        <Input id="title" placeholder="Kupić parasol na balkon" />
        <Label htmlFor="author">Autor</Label>
        <Input id="author" placeholder="Wojtek" />
        <Label htmlFor="note">Treść</Label>
        <InputTextArea id="note" placeholder="Treść" />

        <Button>Dodaj</Button>
      </form>
    </div>
  );
};
