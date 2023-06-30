import React, { useState } from 'react';
import './forms.css';

export function Forms() {
  // const [isConfirmPasswordDissabled, setIsConfirmPasswordDissabled] =
  //   useState(true);

  // * Sposób na walidację przy użyciu value.length
  // const handlePasswordChange = (event) => {
  //   const password = event.target.value;

  //   if (password.length > 3) {
  //     setIsConfirmPasswordDissabled(false);
  //   }

  //   if (password.length <= 3) {
  //     setIsConfirmPasswordDissabled(true);
  //   }
  // };
  const handleSubmit = () => {};

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <label htmlFor="name">Wpisz swoję imię</label>
          <input maxLength="15" type="text" id="name" placeholder="Imię" />
        </div>

        <div className="flex">
          <label htmlFor="surname">Wpisz swoję nazwisko</label>
          <input
            minLength="3"
            type="text"
            id="surname"
            placeholder="Nazwisko"
          />
        </div>

        <div className="flex">
          <label htmlFor="address">Wpisz swój adres</label>
          <input required type="text" id="address" placeholder="Adres" />
        </div>

        <div className="flex">
          <label htmlFor="password">Wpisz swoje hasło</label>
          <input
            // onChange={handlePasswordChange}
            type="password"
            id="password"
            placeholder="Hasło"
          />
        </div>

        <div className="flex">
          <label htmlFor="confirmPassword">Potwierdź swoje hasło</label>
          <input
            // disabled={isConfirmPasswordDissabled}
            type="password"
            id="confirmPassword"
            placeholder="Hasło"
          />
        </div>

        <div className="flex">
          <label htmlFor="select">Wybierz płeć z podanej puli</label>
          <select name="select" id="select" placeholder="Wybierz swoją płeć">
            <option value="woman">Kobieta</option>
            <option value="man">Mężczyzna</option>
            <option value="other">Nieokreślony</option>
          </select>
        </div>

        <div className="flex">
          <label htmlFor="textarea">Opisz swój problem</label>
          <textarea
            name="textarea"
            id="textarea"
            cols="30"
            rows="10"
            placeholder="Opisz jaki masz problem, mordo"
          />
        </div>

        <button type="submit">Wyślij</button>
      </form>
    </>
  );
}
