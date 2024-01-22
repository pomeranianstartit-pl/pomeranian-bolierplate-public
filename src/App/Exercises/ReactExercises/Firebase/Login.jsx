import { useState } from 'react';
import { useFormInputs } from './useFormInput';
import { loginSchema } from './schemas';

import { signIn } from '../../../Firebase/SignIn';

export const LogIn = ({ setToggleLogIn }) => {
  const [inputs, handleInputChange] = useFormInputs();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();
    try {
      const { email, password } = await loginSchema.validate(inputs);
      const { user } = await signIn(email, password);
      console.log('uzytkownik', user);
      setErrorMessage('');
      console.log(email, password, 'inputs');
    } catch (error) {
      console.log(error.message, 'error message');
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Logowanie</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          required
          autoComplete="off"
          placeholder="wpisz email"
          onChange={handleInputChange}
        />
        <input
          type="password"
          name="password"
          required
          autoComplete="off"
          placeholder="wpisz hasło"
          onChange={handleInputChange}
        />
        <input type="submit" value="Zaloguj się" />
        <p>
          Jeśli nie masz konta to
          <button onClick={setToggleLogIn}> Zarejestruj się</button>
        </p>
        <p className="auth-form-error">{errorMessage}</p>
      </form>
    </div>
  );
};
