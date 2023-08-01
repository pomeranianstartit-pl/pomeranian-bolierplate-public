export const formatDate = (dateString, hasYear) => {
  const date = new Date(dateString);

  const options = {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  };

  return date.toLocaleString(undefined, options);
};