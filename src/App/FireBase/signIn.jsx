import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const logIn = async (email, password) => {
  const auth = getAuth();

  return await signInWithEmailAndPassword(auth, email, password);
  // Signed in
//   const user = userCredential.user;
//   console.log('login succesfull');
};
