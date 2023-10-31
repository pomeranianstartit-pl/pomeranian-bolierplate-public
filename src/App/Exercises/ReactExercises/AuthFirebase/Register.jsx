import React, { useState } from 'react';
import { firebaseConfig } from '../../../Firebase/firebaseConfig';
import { useFormInputs } from './useFormInputs';
import { registerSchema } from './schemas';
import * as yup from 'yup';

const Register = () => {
 const [inputs, handleInputChange] = useFormInputs();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, stSuccessMessage] = useState('');
  const auth = getAuth();

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(error.message);
      // ..
    });
};

export const AuthFirebase = () => {
  

  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();
    console.log(inputs);
    try {
      const { email, password } = await registerSchema.validate(inputs);
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <>
      <h1>Autoryzacja z Firebase</h1>
      {/* <button onClick={() => register('ola1@gmail.com', '123456')}>
        Register
      </button>
      <button onClick={() => register('ola1gmail.com', '123456')}>
        Register Error
      </button> */}
      <div className="auth-form-container">
        <h2>Log in</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">e-mail</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email"
            //required
            autoComplete="off"
            onChange={handleInputChange}
          />
          <label htmlFor="password">password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="password"
            //required
            autoComplete="off"
            onChange={handleInputChange}
          />
          <label htmlFor="confirmPassword">confirm password</label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            placeholder="confirmPassword"
            //required
            autoComplete="off"
            onChange={handleInputChange}
          />
          <input type="submit" value="Register" />
        </form>
        <p className="auth-form-error">{errorMessage}</p>
      </div>
    </>
  );
};