import { useEffect, useState } from 'react';

export const FetchData = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState('');

  const loadData = () => {
    fetch('https://jsonplaceholder.typicode.com/todos/3')
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        setError(err.message);
      });
  };

  const asyncAwaitLoadData = async () => {
    try {
      const req = await fetch('https://jsonplaceholder.typicode.com/todos/3');
      const data = await req.json();

      setData(data);
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    // loadData();
    asyncAwaitLoadData();
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      {data && (
        <div>
          <div>ID użytkownika: {data.userId}</div>
          <div>ID todosa: {data.id}</div>
          <div>Tytuł notatki: {data.title}</div>
          <div>Czy jest zakończone: {`${data.completed}`}</div>
        </div>
      )}
    </div>
  );
};
