import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export const useAuthStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        setUser(user);
        setIsLoggedIn('yes');
        // ...
      } else {
        // User is signed out
        // ...
        setUser(null);
        setIsLoggedIn('no');
      }
    });
    return () => unsubscribe();
  }, []);

  return { isLoggedIn, user };
};
