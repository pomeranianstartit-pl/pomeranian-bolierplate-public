import { useState } from 'react';
// import { firebaseApp } from './firebase';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const Exercise = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();

    // signInWithEmailAndPassword(getAuth(firebaseApp), email, password)
    //   .then(() => {
    //     console.log('zalogowano');
    //   })
    //   .catch((err) => {
    //     console.log(err, 'error');
    //   });
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">Hasło</label>
          <input
            name="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Zaloguj</button>
      </form>
    </div>
  );
};
