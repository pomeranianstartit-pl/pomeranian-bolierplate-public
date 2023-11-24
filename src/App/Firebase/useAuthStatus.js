import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { useEffect, useState } from 'react';
export const useAuthStatus = () => {
  const [isLogged, setIsLogged] = useState(undefined);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        // ...
        setIsLogged(true);
        setUser(user);
      } else {
        // User is signed out
        // ...
        setIsLogged(false);
        setUser(null);
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  return [isLogged, user];
};
