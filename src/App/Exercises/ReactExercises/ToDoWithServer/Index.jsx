import { useEffect } from 'react';
import { useState } from 'react';
import { SingleTask } from './SingleTask/SingleTask';

const API_URL = 'http://localhost:3333/api';

export function Exercise() {
  const [data, setData] = useState([]);
  const [errorList, setErrorList] = useState([]);

  const getData = async () => {
    const response = await fetch(`${API_URL}/todo`);
    const jsonData = await response.json();
    console.log(jsonData, 'dane z serwera');
    setData(jsonData);
  };
  const deleteToDo = async (id) => {
    console.log('sprawdzanie funkcji');
    const response = await fetch(`${API_URL}/todo/${id}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' },
    });
    const { status } = await response;
    if (status === 200) {
      getData();
    } else if (status === 500 || status === 404) {
      console.log('status 400 lub 500');
      setErrorList((prevErrorList) => [...prevErrorList, id]);
      console.log(errorList, 'newerrorlist');
    }
  };
  useEffect(() => {
    getData();
  }, []);
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <p className="todopar">Tutaj znajdziesz listę swoich zadań.</p>
      {data.map((element) => {
        const isError = errorList.includes(element.id);
        return (
          <SingleTask
            title={element.title}
            author={element.author}
            note={element.note}
            id={element.id}
            isError={isError}
            deleteToDo={deleteToDo}
          />
        );
      })}
      {/* // <SingleTask
        label="Kupić spray na kleszcze"
        name_date="Wojtek 10.04.2024, 11:30"
        comment="Pamiętać, żeby sprawdzić skład i termin ważności preparatu.
      Zadzwonić do weta, żeby się upewnić, czy mają na stanie."
      />
      ,
      <SingleTask
        label="Szczepienie kitku"
        name_date="Wojtek 15.04.2024, 15:30"
        comment="Sprawdzić w książeczce zdrowia, kiedy Nala była ostatni raz
        szczepiona i umówić się z naszym weterynarzem."
      /> */}
    </div>
  );
}
