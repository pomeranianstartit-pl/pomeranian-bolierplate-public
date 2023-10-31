export const RequestHandler = async (selectedMethod, id, data) => {
  return new Promise(async (resolve, reject) => {
    const serverUrl = 'http://localhost:3333/api/todo';
    let endOfUrl = '';
    let body;
    if (selectedMethod !== 'GET') {
      body = JSON.stringify(data);
    }
    if (id) {
      endOfUrl = `/${id}`;
    }
    const response = await fetch(`${serverUrl}${endOfUrl}`, {
      method: selectedMethod,
      headers: {
        'Content-Type': 'application/json',
      },
      body,
      // body: JSON.stringify({ data }),
    });
    const jsonResponse = await response.json();
    if (response.status === 200) {
      resolve(jsonResponse);
    }
    if (response.status !== 200) {
      reject(jsonResponse);
    }
  });
};
