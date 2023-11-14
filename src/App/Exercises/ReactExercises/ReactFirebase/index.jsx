import { useState } from 'react';
import './styles.css';

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
import { app } from './config';

export const ReactFirebase = () => {
  const auth = getAuth(app);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [registerView, setRegisterView] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const [isLogged, setIsLogged] = useState(false);
  const [user, setUser] = useState(null);

  const handleChangeView = () => {
    setRegisterView(true);
  };

  const authUser = (authAction) => {
    authAction(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        setUser(user);
        setIsLogged(true);
        setEmail('');
        setPassword('');
        setIsLoading(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setError({ errorCode, errorMessage });
        setIsLoading(false);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (registerView) {
      authUser(createUserWithEmailAndPassword);
    } else {
      authUser(signInWithEmailAndPassword);
    }
  };

  const handleLogout = () => {
    setIsLoading(true);
    auth.signOut().then(() => {
      setIsLogged(false);
      setUser(null);
      setIsLoading(false);
    });
  };

  if (isLoading)
    return (
      <div class="load-wrapp">
        <div class="load-3">
          <p>Loading 3</p>
          <div class="line"></div>
          <div class="line"></div>
          <div class="line"></div>
        </div>
      </div>
    );

  return (
    <div>
      {isLogged && <h3>Wyloguj</h3>}
      {!isLogged && <h3>{registerView ? 'Zarejestruj' : 'Zaloguj'}</h3>}
      {!isLogged && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password">Hasło</label>
            <input
              type="password"
              id="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button type="submit">
            {registerView ? 'Zarejestruj' : 'Zaloguj'}
          </button>
          {!registerView && (
            <button onClick={handleChangeView}>Stwórz konto</button>
          )}

          {error && <div>{error.errorMessage}</div>}
        </form>
      )}

      {isLogged && (
        <>
          <div>Brawo, zalogowany użytkowniku o adresie email: {user.email}</div>
          <button onClick={handleLogout}>Wyloguj</button>
        </>
      )}
    </div>
  );
};
