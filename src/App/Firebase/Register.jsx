import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export const register = (email, password) => {
  const auth = getAuth();
  // createUserWithEmailAndPassword(auth, email, password)
  //   .then((userCredential) => {
  //     // Signed up
  //     const user = userCredential.user;
  //     console.log('register succeded', user);
  //     // ...
  //   })
  //   .catch((error) => {
  //     const errorCode = error.code;
  //     const errorMessage = error.message;
  //     console.log('register failed', errorMessage);
  //     // ..
  //   });
  return createUserWithEmailAndPassword(auth, email, password);
};
