import { useEffect } from 'react';
import { useState } from 'react';

const TODOS = [
  'Grocery Shopping',
  'Dentist Appointment',
  'Exercise Routine',
  'Project Deadline',
  'Laundry Day',
  'Call Friend',
  'Pay Bills',
  'Research Topic',
  'Clean House',
  'Plan Vacation',
];

const TIMEOUT = 2000; // 2s

export const getRandomInt = (id) => {
  return Math.floor(Math.random() * id);
};

export const getRandomTaskName = () => {
  return TODOS.at(getRandomInt(TODOS.length - 1));
};

export const formatDate = (text) => {
  const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}\.\d{3}Z$/;
  if (!dateRegex.test(text)) return 'Invalid Date';
  const date = new Date(text);
  const formatter = new Intl.DateTimeFormat('pl', {
    dateStyle: 'short',
    timeStyle: 'short',
  });
  return formatter.format(date);
};

export const getNumberOfTasks = (todos) => {
  if (!todos) throw Error('missing todos parameter');
  if (!(todos instanceof Array)) return undefined;
  return todos.length;
};

export const ToDoList = () => {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState('');

  const getAllTodos = async () => {
    const path = 'http://localhost:3333/api/todo';
    const headers = { accept: 'application/json' };
    const method = 'GET';
    try {
      const resp = await fetch(path, { headers, method });
      if (!resp.ok) throw new Error('Invalid response code: ' + resp.status);
      const data = await resp.json();
      setTodos(data);
    } catch (error) {
      setTodos([]);
      setMessage(error.message);
    }
  };

  useEffect(() => {
    getAllTodos();
  }, []);

  const handleDelete = async (id) => {
    const path = `http://localhost:3333/api/todo/${id}`;
    const headers = { accept: 'application/json' };
    const method = 'DELETE';
    try {
      const resp = await fetch(path, { headers, method });
      if (!resp.ok) throw new Error('Invalid response code:' + resp.status);
      const { id: newId } = await resp.json();
      getAllTodos();
      setMessage('Usunięto zadanie: ' + newId);
    } catch (error) {
      setMessage(error.message);
    }
  };

  useEffect(() => {
    let id;
    if (message.length > 0) {
      id = setTimeout(() => {
        setMessage('');
      }, TIMEOUT);
    }
    return () => clearTimeout(id);
  }, [message]);

  const handleAddRandom = async () => {
    const path = `http://localhost:3333/api/todo`;
    const headers = {
      accept: 'application/json',
      'Content-Type': 'application/json',
    };
    const method = 'POST';
    const randomValue = getRandomTaskName();
    const body = JSON.stringify({
      title: randomValue,
      note: randomValue,
    });
    try {
      const resp = await fetch(path, { headers, method, body });
      if (!resp.ok) throw new Error('Invalid response code: ' + resp.status);
      const { title } = await resp.json();
      setMessage('Dodano zadanie - ' + title);
      getAllTodos();
    } catch (error) {
      setMessage(error.message);
    }
  };

  return (
    <section>
      <h1>Todo List</h1>
      <div>
        Liczba zadań:
        <span data-testid="number-of-tasks">{getNumberOfTasks(todos)}</span>
      </div>
      <p>
        <button onClick={handleAddRandom}>Add random</button>
        <button onClick={getAllTodos}>Refresh</button>
      </p>
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Creation date</th>
            <th>Task Actions</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(({ id, title, createdAt, isDone }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>{formatDate(createdAt)}</td>
              <td>
                <button onClick={() => handleDelete(id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <br />
      <div className="message" data-testid="todo-error-message">
        {message}
      </div>
    </section>
  );
};
