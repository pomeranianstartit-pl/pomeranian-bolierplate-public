import { useEffect, useState } from 'react';

export const TODO_NAMES = [
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

export const sum = (a, b) => a + b;

export const getNumberOfTasks = (todos) => {
  if (!todos) throw Error('missing todos parameter');
  if (!(todos instanceof Array)) return undefined;
  return todos.length;
};

export const getRandomInt = (id) => {
  return Math.floor(Math.random() * id);
};

export const getRandomTaskName = (getRandom = getRandomInt) => {
  return TODO_NAMES.at(getRandom(TODO_NAMES.length));
};

export const formatDate = (text) => {
  if (!text) return 'formatDate missing pram';
  const date = new Date(text);
  const formatter = new Intl.DateTimeFormat('pl', {
    dateStyle: 'short',
    timeStyle: 'short',
  });
  return formatter.format(date);
};

export const TestedComponent = () => {
  const [todos, setTodos] = useState([]);
  const [message, setMessage] = useState('');

  const getAllTodos = async () => {
    const path = 'http://localhost:3333/api/todo';
    const headers = { accept: 'application/json' };
    const method = 'GET';
    try {
      const resp = await fetch(path, { headers, method });
      if (!resp.ok) throw new Error('Server error: ' + resp.status);
      const data = await resp.json();
      setTodos(data);
    } catch (error) {
      setTodos([]);
      setMessage(error.message);
    }
  };

  useEffect(() => {
    getAllTodos();
    // let id = setTimeout(getAllTodos, 0);
    // return () => clearTimeout(id);
  }, []);

  return (
    <div>
      <h1>Testing header</h1>
      <table>
        <thead>
          <tr>
            <th>Task Name</th>
            <th>Creation date</th>
          </tr>
        </thead>
        <tbody>
          {todos.map(({ id, title, createdAt, isDone }) => (
            <tr key={id}>
              <td>{title}</td>
              <td>{formatDate(createdAt)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>Status: {message}</div>
    </div>
  );
};
