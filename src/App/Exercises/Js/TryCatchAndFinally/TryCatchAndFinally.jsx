import React, { useState } from 'react';
import { useDebounce } from './useDebounce';

const SERVER_LAG = 2000;
const DEBOUNCE_VALUE = 1000;

const api = async (userName) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        data: { id: userName.length },
        status: 200,
        message: 'OK',
      });
    }, SERVER_LAG);
  });
};

export const TryCatchAndFinally = () => {
  const [userName, setUserName] = useState('');
  const [id, setId] = useState();
  const getUserId = async (userName) => {
    if (!userName) return;
    try {
      const { data } = await api(userName);
      setId(data.id);
    } catch (err) {
      console.error(err);
    }
  };

  useDebounce(() => getUserId(userName), [userName], DEBOUNCE_VALUE);

  return (
    <div>
      Current user id: {id || "Didn't provide any username"}
      <br />
      Podaj imię
      <input
        type="text"
        value={userName}
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
    </div>
  );
};
