import { app } from '../../../FireBase/firebaseConfig';
import { useAuthStatus } from '../../../FireBase/useAuthStatus';
import { Posts } from './Posts';
import { SignOutButton } from './SignOut';
import { AuthenticateUser } from './authenticateUser';

import './styles.css';

export const Firebase = () => {
  const [isLogged, user] = useAuthStatus();
  return (
    <div>
      <h1>Uwierzytelnianie Firebase</h1>
      {/* można przerobić na 3 statusy isLogged */}
      {isLogged === undefined ? null : (
        <div>
          {isLogged ? (
            <div>
              zalogowany jako {user?.email} <SignOutButton /> <Posts />
            </div>
          ) : (
            <AuthenticateUser />
          )}
        </div>
      )}
    </div>
  );
};
