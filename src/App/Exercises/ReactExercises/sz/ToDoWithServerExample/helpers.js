export const API_URL = 'http://localhost:3333/api/todo';

export const requestHandler = async (method, id, body) => {
  return new Promise(async (resolve, reject) => {
    let endOfUrl = '';

    if (id) {
      endOfUrl = `/${id}`;
    }

    const response = await fetch(`${API_URL}${endOfUrl}`, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const jsonResponse = await response.json();

    if (response.status === 200) {
      resolve(jsonResponse);
    }

    if (response.message === 'Server error') {
      reject(jsonResponse);
    }

    // TODO: check it
    if (response.status !== 200) {
      reject(jsonResponse);
    }
  });
};
