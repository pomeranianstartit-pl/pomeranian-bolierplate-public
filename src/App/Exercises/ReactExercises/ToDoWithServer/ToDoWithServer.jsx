import { useState, useEffect } from 'react';
import { RequestHandler } from './helpers';

import './styles.css';
import { ToDoForm } from './components/ToDoForm/ToDoForm';
import { ToDoList } from './components/ToDoList/ToDoList';

export const ToDoWithServer = () => {
  const [showForm, setShowForm] = useState(false);
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [editObject, setEditObject] = useState();

  const getData = () => {
    setLoading(true);
    setError(false);

    RequestHandler('GET')
      .then((response) => {
        //console.log(response, 'response');
        setData(response);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return 'Ładowanie...';
  }

  if (error) {
    return 'Wystąpił błąd!';
  }

  if (showForm) {
    return (
      <ToDoForm
        setShowForm={setShowForm}
        getData={getData}
        setEditObject={setEditObject}
        editObject={editObject}
      />
    );
  }
  return (
    <ToDoList
      setShowForm={setShowForm}
      data={data}
      setEditObject={setEditObject}
      getData={getData}
    />
  );
};
