import { useState } from 'react';
import { useFormInputs } from './useFormInputs';
import { registerSchema } from './schemas';
import { register } from '../../../Firebase/firebaseClient';

import * as yup from 'yup';

export const Register = ({ goToLogin }) => {
  const [inputs, handleInputChange] = useFormInputs();
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();

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
          autoComplete="off"
          onChange={handleInputChange}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <label htmlFor="confirmPassword">confirm password</label>
        <input
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          placeholder="confirmPassword"
          autoComplete="off"
          onChange={handleInputChange}
        />
        <input type="submit" value="Register" />
        <p>
          Already have an account?{' '}
          <button type="button" onClick={goToLogin}>
            Login
          </button>
        </p>
      </form>
      <p className="auth-form-error">{errorMessage}</p>
      <p className="auth-form-success">{successMessage}</p>
    </div>
  );
};
