import { AuthenticateUser } from './authenticateUser';
// import { app } from '../../../Firebase/firebaseConfig';

import './styles.css';
import { useAuthStatus } from '../../../Firebase/useAuthStatus';
import { SignOutButton } from './SignOut';
import { Posts } from './Posts';

export const Exercise = () => {
  const [isLogged, user] = useAuthStatus();
  return (
    <div>
      <h2>Uwierzytelnianie Firebase</h2>
      {isLogged === undefined ? null : (
        <div>
          {isLogged ? (
            <div>
              Jesteś zalogowany jako ${user?.email} <SignOutButton /> <Posts />
            </div>
          ) : (
            <AuthenticateUser />
          )}
        </div>
      )}
    </div>
  );
};
