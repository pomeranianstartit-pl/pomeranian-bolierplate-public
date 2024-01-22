import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';

export const signIn = async (email, password) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password);
  // .then((userCredential) => {
  //   // Signed in
  //   const user = userCredential.user;
  //   console.log('login succeded', user);
  //   // ...
  // })
  // .catch((error) => {
  //   const errorCode = error.code;
  //   const errorMessage = error.message;
  //   console.log('login failed', errorMessage);
  //   // ..
  // });

  return signInWithEmailAndPassword(auth, email, password);
};
