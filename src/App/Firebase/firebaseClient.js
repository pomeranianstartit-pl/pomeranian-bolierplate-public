import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { firebaseConfig } from '../../../Firebase/firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import './style.css';
import { useFormInputs } from './useFormInputs';
import { registerSchema } from './schemas';
import * as yup from 'yup';

const register = (email, password) => {
  const auth = getAuth();
  return createUserWithEmailAndPassword(auth, email, password);
  const [inputs, handleInputChange] = useFormInputs();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();
    //console.log(inputs);
    try {
      const { email, password } = await registerSchema.validate(inputs);
      // zwraca promise
      const userCredential = await register(email, password);
      const user = userCredential.user;
      console.log(user);
      setSuccessMessage('Udało się utworzyc uzytkownika');
    } catch (error) {
      if (error instanceof yup.ValidationError) {
        setErrorMessage(`Pole: ${error.path}, błąd: ${error.message} `);
      } else {
        setErrorMessage(error.message);
      }
    }
  };
  return (
    <div className="auth-form-container">
      <h2>Register</h2>
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
      <p className="auth-form-success">{successMessage}</p>
    </div>
  );
};
