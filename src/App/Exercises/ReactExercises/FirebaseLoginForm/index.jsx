import { useState } from 'react';

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { app } from './firebase';

export const FirebaseLoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(getAuth(app), email, password)
      .then(() => {
        console.log('zalogowano');
        setIsLogged(true);
      })
      .catch((error) => {
        console.log('nie zalogowano');
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          name="email"
          type="email"
          placeholder="Adres email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="password">Hasło</label>
        <input
          name="password"
          type="password"
          placeholder="Wpisz hasło"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Zaloguj</button>
      {isLogged && <p>Zalogowano</p>}
    </form>
  );
};
