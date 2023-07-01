import React, { useState } from 'react';

import './style.css';

export function Exercise() {
  // const [isConfirmPasswordDisabled, setIsConfirmPasswordDisabled] = useState(true)


  /*
    * Walidacja przy użyciu value.length
  */
  // const handlePasswordChange = (event) => {
  //   const password = event.target.value

  //   if (password.length > 3) {
  //     setIsConfirmPasswordDisabled(false)
  //   }
  //   if (password.length <= 3) {
  //     setIsConfirmPasswordDisabled(true)
  //   }
  // }


  const handleSubmit = () => {

  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='flex'>
        <label htmlFor="name">Wpisz swoję imię</label>
        <input type="text" maxLength="15" id="name" placeholder='Imię'/>
      </div>

      <div className='flex'>
        <label htmlFor="surname">Wpisz swoję nazwisko</label>
        <input minLength="3" type="text" id="surname" placeholder='Nazwisko'/>
      </div>

      <div className='flex'>
        <label htmlFor="address">Wpisz swój adres</label>
        <input required type="text" id="address" placeholder='Adres'/>
      </div>

      <div className='flex'>
        <label htmlFor="name">Wpisz swoje hasło</label>
        {/* Walidacja z użyciem value.length */}
        {/* <input onChange={handlePasswordChange} type="password" id="password" placeholder='Hasło'/> */}
        <input required type="password" id="password" placeholder='Hasło'/>
      </div>

      <div className='flex'>
        <label htmlFor="confirmPassword">Potwierdź swoje hasło</label>
        <input type="password" id="confirmPassword" placeholder='Hasło'/>
      </div>

      <div className='flex'>
        <label htmlFor="select">Wybierz płeć z puli podanych, jeżeli czujesz się urażony że Twojej płci nie ma - to sorry</label>
        <select name="select" id="select" placeholder='Wybierz swoją płeć'>
          <option value="women">Kobieta</option>
          <option value="men">Mężczyzna</option>
          <option value="other">Nieokreślony</option>
        </select>
      </div>

      <div className='flex'>
        <label htmlFor="textarea">Opisz swój problem</label>
        <textarea name="textarea" id="textarea" cols="30" rows="10" placeholder='Opisz jaki masz problem, mordo' />
      </div>

      <button type='submit'>Wyślij</button>
    </form>
  );
}
