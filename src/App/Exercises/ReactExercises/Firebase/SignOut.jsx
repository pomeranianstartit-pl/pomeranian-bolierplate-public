import { logOut } from '../../../FireBase/logOut';

export const SignOutButton = () => {
  return (
    <button className="log-out-button" onClick={logOut}>
      Wyloguj
    </button>
  );
};
