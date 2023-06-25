import { API_URL } from "./constants";

export const parseDate = (date) => {
    if (date) {
      const dateObj = new Date(date);
      const finalDate = `${dateObj.getDate()}.${dateObj.getMonth()}.${dateObj.getFullYear()}, ${dateObj.getHours()}:${dateObj.getMinutes()}`;
      return finalDate;
    } else {
      return date;
    }
  };

export const setStateAsync = async (callback) => {
  return new Promise(()=>{
    callback() 
  })
}

export const requestHandler = async (selectedMethod, id, data) => {
  return new Promise(async (resolve, reject)=>{
    let endOfUrl = ''

    if (id) {
      endOfUrl = `/${id}`
    }
    const response = await fetch(`${API_URL}/todo${endOfUrl}`, {
      method: selectedMethod,
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const jsonResponse = await response.json()
    if (response.status === 200) {
      resolve(jsonResponse)
    } else {
      reject(jsonResponse)
    }
  })
}