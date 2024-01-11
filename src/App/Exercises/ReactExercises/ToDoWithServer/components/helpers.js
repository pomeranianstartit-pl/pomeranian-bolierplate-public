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
