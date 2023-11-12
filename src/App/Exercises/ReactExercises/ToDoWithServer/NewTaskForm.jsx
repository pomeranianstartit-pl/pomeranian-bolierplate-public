import { useState } from 'react';
import { ADDRESS } from './index';

export const NewTaskForm = () => {
  const [addLoading, setAddLoading] = useState(null);
  const [addErrorId, setAddErrorId] = useState(null);

  const [title, setTitle] = useState('');
  const [note, setNote] = useState('');
  const [author, setAuthor] = useState('');
  const [form, setForm] = useState({
    title: '',
    note: '',
    author: '',
  });
  const sendDisabled = !title || !note || !author;

  const handleTitle = (event) => {
    setTitle(event.target.value);
  };

  const handleNote = (event) => {
    setNote(event.target.value);
  };

  const handleAuthor = (event) => {
    setAuthor(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const addNewTask = async () => {
    try {
      const request = await fetch(`${ADDRESS}/markAsDone`, {
        method: 'POST',
        header: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title, author, note }),
      });
      if (!request.ok) {
        throw new Error('Something went wrong!');
      }
      const data = await request.json();
    } catch (error) {
      console.log(error, '    set error');
    }
  };

  return (
    <div>
      <p className="task-heading">Dodawanie zadania. </p>
      <form onSubmit={handleSubmit} className="newTask-form">
        <div>
          <label htmlFor="title">Title</label>
          <br />
          <input id="title" type="text" value={title} onChange={handleTitle} />
        </div>
        <div>
          <label htmlFor="note">Note</label>
          <br />
          <input id="note" type="text" value={note} onChange={handleNote} />
        </div>
        <div>
          <label htmlFor="author">Author</label>
          <br />
          <input
            id="author"
            type="text"
            value={author}
            onChange={handleAuthor}
          />
        </div>
        <button>cofnij</button>
        <button type="submit" disabled={sendDisabled}>
          dodaj
        </button>
      </form>
    </div>
  );
};
