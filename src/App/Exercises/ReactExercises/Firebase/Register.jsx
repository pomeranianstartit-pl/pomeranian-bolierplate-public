import { useState } from 'react';
import { registerSchema } from './schemas';
import { useFormInputs } from './useFormInput';
import { register } from '../../../Firebase/Register';

export const Register = ({ setToggleLogIn }) => {
  const [inputs, handleInputChange] = useFormInputs();
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (submitEvent) => {
    submitEvent.preventDefault();
    try {
      const { email, password } = await registerSchema.validate(inputs);
      console.log('rejestruje użytkonika', email, password);
      // register(email, password);
      const { user } = await register(email, password);
      console.log('uztytkownik', user);
      setErrorMessage('');
      console.log(email, password, 'inputs');
    } catch (error) {
      console.log(error.message, 'error message');
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="auth-form-container">
      <h2>Rejestracja</h2>
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
        <input
          type="password"
          name="confirmPassword"
          required
          autoComplete="off"
          placeholder="powtórz hasło"
          onChange={handleInputChange}
        />
        <input type="submit" value="Zarejestruj się" />
        <p>
          Jeśli masz już konto to
          <button onClick={setToggleLogIn}> Zaloguj się</button>
        </p>
        <p className="auth-form-error">{errorMessage}</p>
      </form>
    </div>
  );
};
