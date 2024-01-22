export const apiRequest = async (
  url,
  {
    id = null,
    method = 'GET',
    body = null,
    loadingHandler,
    errorHandler,
    errorMessage = '',
    updateHandler,
  }
) => {
  loadingHandler(true);
  errorHandler(false);

  try {
    let fetchOptions = null;

    if (method !== 'GET') {
      fetchOptions = {
        method, // method: method
        headers: {
          'Content-Type': 'application/json',
        },
      };
    }

    if (body) {
      fetchOptions.body = JSON.stringify(body);
    }

    const response = await fetch(url, fetchOptions);

    if (!response.ok) {
      throw new Error(errorMessage);
    }

    const data = await response.json();

    updateHandler(data);
  } catch (error) {
    if (id) {
      errorHandler(id);
    } else {
      errorHandler(errorMessage);
    }
  } finally {
    loadingHandler(false);
  }
};

export function formatDateAndTime(isoString) {
  const date = new Date(isoString);

  // Formatuje datę i czas do formatu 'yyyy-mm-dd hh:mm'
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Dodaje 0 na początku, jeśli potrzeba
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day}.${month}.${year} ,${hours}:${minutes}`;
}
