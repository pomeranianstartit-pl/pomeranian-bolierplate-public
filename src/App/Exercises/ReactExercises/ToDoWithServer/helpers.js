export const parseDate = (date) => {
    if (date) {
      const dateObj = new Date(date);
      const finalDate = `${dateObj.getDate()}.${dateObj.getMonth()}.${dateObj.getFullYear()}, ${dateObj.getHours()}:${dateObj.getMinutes()}`;
      return finalDate;
    } else {
      return date;
    }
  };