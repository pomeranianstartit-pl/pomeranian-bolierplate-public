import { logOut } from '../../../Firebase/logOut';
import './styles.css';
export const SignOutButton = () => {
  return (
    <>
      <button className="log-out-button" onClick={logOut}>
        Wyloguj{' '}
      </button>
    </>
  );
};
