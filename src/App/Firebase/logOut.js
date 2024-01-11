import { getAuth, signOut } from 'firebase/auth';

export const logOut = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {})

    .catch((error) => {
      console.log(error, 'logout error');
    });
};
