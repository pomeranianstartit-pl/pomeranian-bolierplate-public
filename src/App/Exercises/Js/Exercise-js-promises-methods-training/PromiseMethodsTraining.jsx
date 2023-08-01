import React, { useEffect, useState } from 'react';
import './styles.css';

export function PromiseMethodsTraining () {

  // const fetchDataFast = () => new Promise(resolve => setTimeout(() => {resolve({id:
  //   1, time: 300})}, 300))
  //   const fetchDataLong = () => new Promise(resolve => setTimeout(() => {resolve({id:
  //   2, time: 700})}, 700))
  //   const fetchDataError = () => new Promise((_, reject) => setTimeout(() =>
  //   {reject(new Error('Błąd pobierania danych'))}, 500))

  //   const cb = (log) => {
  //     if (log.status === "rejected") {
  //       console.error(log?.reason?.stack);
  //     } else {
  //       console.log(log);
  //     }
  //   };

  //   const logger = (log) => console.log(log);
  //   const logMultiple = (logs) => logs.forEach(cb);
  //   const errorLogger = (err) => console.error(err);

    // Remember to install jsonServer from NPM https://www.npmjs.com/package/json-server
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const getPosts = () => {
        return fetch('http:/localhost:3001/coomments')
        .then((res) => res.json())
        .then((data) => setUsers(data))
        .catch((e) => console.error(e));
      };
      getPosts();

      return () => getPosts;
    }, []);

    return users.map((user) => (
      <div key={user.id} className="user-card">
        <img width={64} height={64} src={user.avatar} alt="" />
        <a href={'http://localhost:3001/user?id=' + user.id}>
          <b>
            {user.name} {user.surname}
          </b>
        </a>
        <a href={`tel:${user.phone}`}>{user.phone}</a>
        <a href={`mailto:${user.email}`}>{user.email}</a>
      </div>
    ));

    // const [ message, setMessage ] = useState('')
    // useEffect(() => {
    //   new Promise(() => {
    //     setTimeout(() => {
    //       setMessage("Błąd pobierania danych")
          
    //     }, 1000);
    //   }
    //   )
    // }
    // )
    // return (
    //   <>
    //   {message}
    //   </>
    // )

//     return (
//     <div style={{display: 'flex', flexDirection: 'column', gap: '1em'}}>
//       <button onClick={() => fetchDataFast()}>fetchDataFast</button>
//       <button onClick={() => fetchDataLong()}>fetchDataLong</button>
//       <button onClick={() => fetchDataError()}>fetchDataError</button>
//       { /*Methods */ }
//       {/* ALL */}
//       <button
//         onClick={() =>
//           Promise.all([fetchDataFast(), fetchDataLong()]).then(logger)
//         }
//       >
//         Get all
//       </button>
//       <button
//         onClick={() =>
//           Promise.all([fetchDataFast(), fetchDataLong(), fetchDataError()])
//             .then(logger)
//             .catch(errorLogger)
//         }
//       >
//         Get all with error
//       </button>

//         {/* ALLSETTLED */}
//         <button
//         onClick={() =>
//           Promise.allSettled([fetchDataFast(), fetchDataLong()])
//             .then(logger)
//             .catch(errorLogger)
//         }
//       >
//         Get allSettled without error
//       </button>
//       <button
//         onClick={() =>
//           Promise.allSettled([
//             fetchDataFast(),
//             fetchDataLong(),
//             fetchDataError(),
//           ])
//             .then(logMultiple)
//             .catch(errorLogger)
//         }
//       >
//         Get allSettled with error
//       </button>
//       {/* ANY */}
//       <button
//         onClick={() =>
//           Promise.any([fetchDataFast(), fetchDataLong()])
//             .then(logMultiple)
//             .catch(errorLogger)
//         }
//       >
//         Get any without error
//       </button>
//       <button
//         onClick={() =>
//           Promise.any([fetchDataFast(), fetchDataLong(), fetchDataError()])
//             .then(logMultiple)
//             .catch(errorLogger)
//         }
//       >
//         Get any with error
//       </button>
//       {/* RACE */}
//       <button
//         onClick={() =>
//           Promise.race([fetchDataFast(), fetchDataLong()])
//             .then(logMultiple)
//             .catch(errorLogger)
//         }
//       >
//         Get race without error
//       </button>
//       <button
//         onClick={() =>
//           Promise.race([fetchDataFast(), fetchDataLong(), fetchDataError()])
//             .then(logMultiple)
//             .catch(errorLogger)
//         }
//       >
//         Get race with error
//       </button>
//     </div>
//   );
}