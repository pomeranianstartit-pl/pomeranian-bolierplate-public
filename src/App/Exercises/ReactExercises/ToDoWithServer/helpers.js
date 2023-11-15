const API_URL = 'http://localhost:3333/api/todo';

export const requestHandler = (selectedMethod, id, body) => {
  return new Promise(async (resolve, reject) => {
    let endOfUrl = '';

    if (id) {
      endOfUrl = `/${id}`;
    }

    const response = await fetch(`${API_URL}${endOfUrl}`, {
      method: selectedMethod,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const jsonResponse = await response.json();

    if (response.status === 200) {
      resolve(jsonResponse);
    }

    if (response && jsonResponse.message === 'Server error') {
      reject(jsonResponse);
    }

    if (response.status !== 200 && jsonResponse.message) {
      reject(jsonResponse);
    }
  });
};

// Przykłady użycia:

// Pobranie danych
// requestHandler('GET').then((data) => {});

// zamiast:
// fetch('http://localhost:3333/api/todo')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     // setData(data);
//   })
//   .catch((err) => {
//     // console.log(err, 'err');
//   });

// Dodanie todosa
// requestHandler('POST', null, { author: '', note: '', title: '' });

// zamiast:
// fetch('http://localhost:3333/api/todo', {
//   method: 'POST',
//   body: JSON.stringify({
//     title: 'Zadanie 4',
//     author: 'Jan Kowalski',
//     note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   }),
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     // setData(data);
//   })
//   .catch((err) => {
//     // console.log(err, 'err');
//   });

// Aktualizacja todosa
// requestHandler('PUT', 4, { title: '', author: '', note: '' });

// zamiast:
// fetch('http://localhost:3333/api/todo', {
//   method: 'PUT',
//   body: JSON.stringify({
//     title: 'Zadanie 4',
//     author: 'Jan Kowalski',
//     note: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
//   }),
// })
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     // setData(data);
//   })
//   .catch((err) => {
//     // console.log(err, 'err');
//   });

// Zaznaczenie jako wykonane
// requestHandler('PUT', '4/markAsDone');