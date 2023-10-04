import { useEffect, useState, useCallback } from 'react';
import axios from 'axios';
import './styles.css';
import { TodoItem } from './TodoItem/TodoItem';
import { TodoForm } from './TodoForm/TodoForm';

export const BASE_API_URL = 'http://localhost:3333';
export const TIMEOUT_DURATION = 5000; //5sec czekania na odpoiedź serwera

export const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [error, setError] = useState([]);
  const [isFormVisible, setFormVisible] = useState(false);

  const [idForEdit, setIdForEdit] = useState(null);

  const updateTodoList = useCallback(
    (updatedTodo) => {
      //wydobyty fragment funkcji do reużycia w komponencie
      setTodoList(
        todoList.map((todo) => {
          if (todo.id === updatedTodo.id) {
            return updatedTodo;
          }
          return todo;
        })
      );
    },
    [todoList]
  );

  const handleFetchTodoData = useCallback(
    async (givenId) => {
      //givenId jeśli nie podane jest undefined
      const isGetSpecificTodoMode = Boolean(givenId);
      const urlSuffix = isGetSpecificTodoMode ? `/${givenId}` : '';

      try {
        const fetchDataPromise = axios.get(
          `${BASE_API_URL}/api/todo${urlSuffix}`
        );
        const timeOutPromise = new Promise((_, reject) => {
          setTimeout(
            () => reject(new Error('Response Timeout')),
            TIMEOUT_DURATION
          );
        });

        const response = await Promise.race([fetchDataPromise, timeOutPromise]);

        if (!response) {
          setError('Przekroczono czas oczekiwania na odpowiedź serwera');
        }
        setError('');
        if (isGetSpecificTodoMode) {
          updateTodoList(response.data);
        } else {
          setTodoList(response.data);
        }
      } catch (error) {
        setError(
          'Wystpił błąd podczas komunikacji z serwerem ' + error?.message
        );
      }
    },
    [updateTodoList]
  );

  useEffect(() => {
    handleFetchTodoData();
  }, [handleFetchTodoData]);

  return (
    <div className="todo-container">
      <h2 className="todo-container__title">Todo List</h2>
      {error && (
        <div className="todo-container__message">
          <p>Przepraszamy. Nie udało się pobrać listy zadań.</p>
          <p>{error}</p>
          <button
            className="app-button"
            onClick={() => {
              handleFetchTodoData();
            }}
          >
            ODŚWIEŻ WIDOK
          </button>
        </div>
      )}

      {isFormVisible && (
        <TodoForm
          handleFetchTodoData={handleFetchTodoData}
          setFormVisible={setFormVisible}
          data={todoList.find((todo) => todo.id === idForEdit)}
          setIdForEdit={setIdForEdit}
        />
      )}
      {!isFormVisible && !error && (
        <>
          <div className="todo-container__list">
            {todoList.length > 0 &&
              todoList.map((todo) => {
                return (
                  <TodoItem
                    handleFetchTodoData={handleFetchTodoData}
                    updateTodoList={updateTodoList}
                    setIdForEdit={setIdForEdit}
                    setFormVisible={setFormVisible}
                    todo={todo}
                    key={todo.id}
                  />
                );
              })}
          </div>

          <button
            className="app-button"
            onClick={() => {
              setFormVisible(true);
            }}
          >
            DODAJ
          </button>
        </>
      )}
    </div>
  );
};
//------------------------------------Logiczne opracowanie funkcji----------------------------
/**
 * utworzenie buttona
 * wybór elementu do usunięcia
 * request do API
 * sprawdzenie czy API wykonało usunięcie todosa
 * zaktualizowanie listy todosów po usunięciu
 */

/**
 * DODAWANIE TODOSA:
 * button "DODAJ"
 * widok formularza dodawania z dwoma inputami i przyciskiem "ZAPISZ" i "COFNIJ"
 * obsługa widoku (przełączanie widoku)
 * request do API dodający nowe todo
 * jezeli request się powiedzie to:
 *    informujemy o powodzeniu,
 *    czyscimy formularz
 * po kliku "COFNIJ" odswiezamy listę
 */

/**
 * EDYCJA TODOSA:
 * button "Edytuj"
 * włączenie formularza z danymi i w trybie edycji (brak autora i labelka przycisku zmienia się na ZAPISZ)
 * wysłanie odpowiedniego requestu (PUT i z identyfikatorem)
 * po kliku ZAPISZ wracamy do listy i odświezamy

 */
