import { useState } from 'react';
import './styles.css';

export function Exercise() {
  const [isConfirmPasswordDisabled, setConfirmPasswordDisabled] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission
  };
// *walidacja 
//   const handlePasswordChange = (event) => {
//     const password = event.target.value;
//     if (password.length > 3) {
//       setConfirmPasswordDisabled(false);
//     } if (password.length <= 3){
//       setConfirmPasswordDisabled(true);
//     }
//   };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='flex'>
          <label htmlFor='name'>Wpisz swoje imię</label>
          <input required type='text' id='name' placeholder='Imię' maxLength={20} />
        </div>

        <div className='flex'>
          <label htmlFor='surname'>Wpisz swoje nazwisko</label>
          <input required type='text' id='surname' placeholder='Nazwisko' />
        </div>

        <div className='flex'>
          <label htmlFor='address'>Wpisz swój adres</label>
          <input  required type='text' id='address' placeholder='Adres' />
        </div>

        <div className='flex'>
          <label htmlFor='password'>Wpisz swoje hasło</label>
          <input required type='password' id='password' placeholder='Hasło' />
        </div>

        <div className='flex'>
          <label htmlFor='confirmPassword'>Potwierdź swoje hasło</label>
          <input
            // onChange={handlePasswordChange}
            type='password'
            id='confirmPassword'
            placeholder='Hasło'
            required
            minLength={5} 
          />
        </div>

        <div className='flex'>
          <label htmlFor='select'>Wybierz swoją płeć</label>
          <select
            // disabled={isConfirmPasswordDisabled}
            id='select'
            placeholder='Hasło'
            required
          >
            <option value='woman'>Kobieta</option>
            <option value='man'>Mężczyzna</option>
            <option value='other'>Nieokreślony</option>
          </select>
        </div>

        <div className='flex'>
          <label htmlFor='textarea'>Opisz swój problem</label>
          <textarea
            id='textarea'
            placeholder='Opisz swój problem'
            cols='30'
            rows='10'
          ></textarea>
        </div>

        <button type='submit'>Wyślij</button>
      </form>
    </div>
  );
}
