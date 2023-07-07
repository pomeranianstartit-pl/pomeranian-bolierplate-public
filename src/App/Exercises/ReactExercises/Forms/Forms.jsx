import React, { useState } from 'react';
import './style.css';

export function Exercise() {
  const handleSubmit = () => {};
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex">
          <label htmlFor="name"> wpisz swoje imie</label>
          <input type="text" id="name" placeholder="Imię"></input>
        </div>
        <div className="flex">
          <label htmlFor="surname"> wpisz swoje nazwisko</label>
          <input type="text" id="surname" placeholder="Nazwisko"></input>
        </div>

        <div className="flex">
          <label htmlFor="addres"> wpisz swój adres</label>
          <input type="text" id="address" placeholder="Adres"></input>
        </div>

        <div className="flex">
          {' '}
          <label htmlFor="password"> wpisz swoje hasło</label>
          <input type="password" id="password" placeholder="Hasło"></input>
        </div>

        <div className="flex">
          {' '}
          <label htmlFor="confirmPassword"> potwierdź swoje hasło</label>
          <input
            disabled={''}
            type="password"
            id="password"
            placeholder="Hasło"
          ></input>
        </div>

        <div className="flex">
          {' '}
          <label thmlFor="select"> wybierz płeć</label>
          <select name="select" id="select" placeholder="wybierz płeć">
            <option value="women">Kobieta</option>
            <option value="men">Męzczyzna</option>
            <option value="other">Nieokreślony</option>
          </select>
        </div>
        <textarea
          name="textarea"
          id="textarea"
          cols="30"
          rows="10"
          placeholder="opisz problem"
        />

        <br />
        <button type="submit">Wyślij</button>
      </form>
    </>
  );
}
