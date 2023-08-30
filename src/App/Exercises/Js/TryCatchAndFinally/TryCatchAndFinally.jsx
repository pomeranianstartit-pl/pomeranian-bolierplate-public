import React, { useEffect, useState } from 'react';
import './style.css';
import { debounce, throttle } from 'lodash';
import { ApiCallExercise } from './TryCatchAndFinallyExercise';
/**
 * APi is needed to delivery an id based on provided user nam length
 * HTML will need an input for that
 */
const ping = 5 * 1000;
const api = (userName) =>
  new Promise((resolve, reject) => {
    // Let's assume we have heavy load under this URL
    const mockedResponseFromServer = userName.length;
    setTimeout(() => {
      resolve({
        data: { id: mockedResponseFromServer },
        status: 200,
        message: 'OK',
      });
    }, ping);
  });

export function TryCatchAndFinally() {
  const debounceApi = React.useRef(debounce(api, 500)).current;
  const [userName, setUserName] = useState('');
  useEffect(() => {
    const getUserId = async (userName) => {
      if (!userName) return;
      try {
        const { data } = await debounceApi(userName);
        console.log('dla tego użytkownika id to: ' + data.id);
      } catch (err) {
        console.error(err);
      }
    };
    getUserId(userName);
  }, [userName]);
  useEffect(() => {
    return () => debounceApi.cancel;
  }, [debounceApi]);
  const handleAddName = (userName) => {
    setUserName(userName);
  };
  const debounceHandleAddName = throttle(handleAddName, 300);
  return (
    <div>
      <ApiCallExercise />
      <p>Jestem przykładowym routem</p>
      <input
        type="text"
        value={userName}
        onChange={(event) => {
          {
            debounceHandleAddName(event.target.value);
          }
        }}
      />
      <p>{userName}</p>
    </div>
  );
}

/*
const ping = 5 * 1000
const api = () => new Promise((resolve, reject) => {
  // Let's assume we have heavy load under this URL
  const mockedResponseFromServer = [
    "Voluptate reprehenderit et aliquip non culpa tempor dolor officia sit. Labore enim id laboris do excepteur cillum. In cupidatat esse nisi reprehenderit laborum minim. Sit qui sit incididunt mollit ut veniam mollit consectetur nisi ex. Eiusmod cillum do ipsum ipsum id irure elit veniam velit. Consectetur adipisicing eiusmod minim deserunt.",
    "Voluptate reprehenderit et aliquip non culpa tempor dolor officia sit. Labore enim id laboris do excepteur cillum. In cupidatat esse nisi reprehenderit laborum minim. Sit qui sit incididunt mollit ut veniam mollit consectetur nisi ex. Eiusmod cillum do ipsum ipsum id irure elit veniam velit. Consectetur adipisicing eiusmod minim deserunt.",
    "Voluptate reprehenderit et aliquip non culpa tempor dolor officia sit. Labore enim id laboris do excepteur cillum. In cupidatat esse nisi reprehenderit laborum minim. Sit qui sit incididunt mollit ut veniam mollit consectetur nisi ex. Eiusmod cillum do ipsum ipsum id irure elit veniam velit. Consectetur adipisicing eiusmod minim deserunt.",
    "Voluptate reprehenderit et aliquip non culpa tempor dolor officia sit. Labore enim id laboris do excepteur cillum. In cupidatat esse nisi reprehenderit laborum minim. Sit qui sit incididunt mollit ut veniam mollit consectetur nisi ex. Eiusmod cillum do ipsum ipsum id irure elit veniam velit. Consectetur adipisicing eiusmod minim deserunt.",
    "Voluptate reprehenderit et aliquip non culpa tempor dolor officia sit. Labore enim id laboris do excepteur cillum. In cupidatat esse nisi reprehenderit laborum minim. Sit qui sit incididunt mollit ut veniam mollit consectetur nisi ex. Eiusmod cillum do ipsum ipsum id irure elit veniam velit. Consectetur adipisicing eiusmod minim deserunt.",
    "Voluptate reprehenderit et aliquip non culpa tempor dolor officia sit. Labore enim id laboris do excepteur cillum. In cupidatat esse nisi reprehenderit laborum minim. Sit qui sit incididunt mollit ut veniam mollit consectetur nisi ex. Eiusmod cillum do ipsum ipsum id irure elit veniam velit. Consectetur adipisicing eiusmod minim deserunt.",
    "Voluptate reprehenderit et aliquip non culpa tempor dolor officia sit. Labore enim id laboris do excepteur cillum. In cupidatat esse nisi reprehenderit laborum minim. Sit qui sit incididunt mollit ut veniam mollit consectetur nisi ex. Eiusmod cillum do ipsum ipsum id irure elit veniam velit. Consectetur adipisicing eiusmod minim deserunt.",
    "Voluptate reprehenderit et aliquip non culpa tempor dolor officia sit. Labore enim id laboris do excepteur cillum. In cupidatat esse nisi reprehenderit laborum minim. Sit qui sit incididunt mollit ut veniam mollit consectetur nisi ex. Eiusmod cillum do ipsum ipsum id irure elit veniam velit. Consectetur adipisicing eiusmod minim deserunt.",
    "Voluptate reprehenderit et aliquip non culpa tempor dolor officia sit. Labore enim id laboris do excepteur cillum. In cupidatat esse nisi reprehenderit laborum minim. Sit qui sit incididunt mollit ut veniam mollit consectetur nisi ex. Eiusmod cillum do ipsum ipsum id irure elit veniam velit. Consectetur adipisicing eiusmod minim deserunt.",
    "Voluptate reprehenderit et aliquip non culpa tempor dolor officia sit. Labore enim id laboris do excepteur cillum. In cupidatat esse nisi reprehenderit laborum minim. Sit qui sit incididunt mollit ut veniam mollit consectetur nisi ex. Eiusmod cillum do ipsum ipsum id irure elit veniam velit. Consectetur adipisicing eiusmod minim deserunt.",
    "Voluptate reprehenderit et aliquip non culpa tempor dolor officia sit. Labore enim id laboris do excepteur cillum. In cupidatat esse nisi reprehenderit laborum minim. Sit qui sit incididunt mollit ut veniam mollit consectetur nisi ex. Eiusmod cillum do ipsum ipsum id irure elit veniam velit. Consectetur adipisicing eiusmod minim deserunt.",
    "Voluptate reprehenderit et aliquip non culpa tempor dolor officia sit. Labore enim id laboris do excepteur cillum. In cupidatat esse nisi reprehenderit laborum minim. Sit qui sit incididunt mollit ut veniam mollit consectetur nisi ex. Eiusmod cillum do ipsum ipsum id irure elit veniam velit. Consectetur adipisicing eiusmod minim deserunt.",
    "Voluptate reprehenderit et aliquip non culpa tempor dolor officia sit. Labore enim id laboris do excepteur cillum. In cupidatat esse nisi reprehenderit laborum minim. Sit qui sit incididunt mollit ut veniam mollit consectetur nisi ex. Eiusmod cillum do ipsum ipsum id irure elit veniam velit. Consectetur adipisicing eiusmod minim deserunt.",
  ]
  setTimeout(() => {
    resolve({
      data: mockedResponseFromServer,
      status: 200,
      message: "OK"
    });
  }, ping);
});

*/
/* const logIncident = (incident, stack) => {
  const err = new Error ("Sorry, there was an error on our side," + incident);
  err.stack = stack

  throw err
  googleAPI("analytics", err)
}

const api = (output) => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(output);
  }, 2000);

  reject(logIncident("Unathorized", `
    React app could resolve path ./src/components/component.jsx
  `))
});

const mockedResponseFromServer = 
{
  users:
    [
      { name: "Lukas" },
      { name: "Adam" },
    ]
}

const getUsers = async () => {
  try {
    const data = await api(mockedResponseFromServer)
    return data
  } catch (err) {
    console.error(err)
  } finally {
    console.log("Finished loading data.")
  }
}

const getAllUSers = async () => {
  console.log(await getUsers())
}

getAllUSers() */
