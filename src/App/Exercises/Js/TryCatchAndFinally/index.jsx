import React from 'react';
import { useEffect, useState } from 'react';
import { debounce } from 'lodash';
import { throttle } from 'lodash';
import { ApiCallExercise } from './ApiCall';

const ping = 5 * 1000;
const api = (userName) =>
  new Promise((resolve, reject) => {
    const mockedResponseFromServer = userName.length;

    setTimeout(() => {
      resolve({
        data: { id: mockedResponseFromServer },

        status: 200,

        message: 'OK',
      });
    }, 2000);
  });

export function TryCatchAndFinally() {
  const debouncedApi = React.useRef(debounce(api, 200)).current;
  const [userName, setUserName] = useState('');

  useEffect(() => {
    const getUserId = async (userName) => {
      if (!userName) {
        return;
      }

      try {
        const { data } = await debouncedApi(userName);

        console.log('Dla tego uzytkownika id to: ' + data.id);
      } catch (err) {
        console.log(err);
      }
    };

    getUserId(userName);
  }, [userName]);

  useEffect(() => {
    return () => debouncedApi.cancel();
  }, [debouncedApi]);

  const handleAddName = (userName) => {
    setUserName(userName);
  };

  const throttledHandleAddName = throttle(handleAddName, 400);

  return (
    <div>
      {/* <input
        value={userName}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
        type="text"
      /> */}
      <ApiCallExercise />
    </div>
  );
}
