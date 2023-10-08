import React from 'react';
import { AuthUser } from './AuthUser';
import { app } from '../../../Firebase/firebaseConfig';
import { logout } from '../../../Firebase/firebaseClient';
import { useAuthStatus } from './useAuthStatus';

import './styles.css';

export const AuthFirebase = () => {
  const { isLoggedIn, user } = useAuthStatus();

  return (
    <>
      <h1>Autoryzacja z Firebase</h1>
      {isLoggedIn === null ? null : (
        <div>
          <p>Zainicjowany firebase..</p>
          {isLoggedIn === 'yes' ? (
            <>
              <div>Jesteś zalogowany</div>
              <button type="button" onClick={logout}>
                Wyloguj
              </button>
            </>
          ) : (
            <AuthUser />
          )}
        </div>
      )}
    </>
  );
};
