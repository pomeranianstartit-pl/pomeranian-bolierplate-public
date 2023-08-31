import React, { useState } from 'react';
import './style.css';

const initialOrderExtras = {
  css: {
    title: 'ustawienie środowiska',
    state: false,
  },
  javascript: {
    title: 'intro do Github',
    state: false,
  },
  react: {
    title: 'materiały dodatkowe',
    state: false,
  },
};

export const BasicForms = () => {
  const [course, setCourse] = useState('');
  const [payment, setPayment] = useState('');
  const [orderExtras, setOrderExtras] = useState(initialOrderExtras);
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  function handleOnSubmit(e) {
    e.preventDefault();
    const data = {
      course,
      payment,
    };
    console.log('Submit:', data);
  }

  return (
    <form onSubmit={handleOnSubmit} className="basicForm-wrapper">
      <h2 className="basicForm-header">Zamówienie produktu</h2>
      <div className="basicForm-flex-column">
        <label className="basicForm-label" htmlFor="course-field">
          Wybierz produkt*
        </label>
        <select
          className="basicForm-select"
          id="course-filed"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="frontend">kurs front-end</option>
          <option value="backend">kurs back-end</option>
          <option value="devops">kurs devops</option>
        </select>
      </div>

      <div className="basicForm-flex-column">
        <label className="basicForm-label">Wybierz metodę płatności*</label>
        <div>
          <input
            type="radio"
            value="blik"
            id="payment-blik"
            checked={payment === 'blik'}
            onChange={(e) => setPayment(e.target.value)}
          />
          <label className="basicForm-radio-label" htmlFor="payment-blik">
            blik
          </label>
        </div>

        <div>
          <input
            type="radio"
            value="paypal"
            id="payment-paypal"
            checked={payment === 'paypal'}
            onChange={(e) => setPayment(e.target.value)}
          />
          <label className="basicForm-radio-label" htmlFor="payment-paypal">
            paypal
          </label>
        </div>
        <div>
          <input
            type="radio"
            value="transfer"
            id="payment-transfer"
            checked={payment === 'transfer'}
            onChange={(e) => setPayment(e.target.value)}
          />
          <label className="basicForm-radio-label" htmlFor="payment-transfer">
            przelew tradycyjny
          </label>
        </div>
      </div>

      <div className="basicForm-flex-column">
        <label className="basicForm-label">Opcje dodatkowe do zamówienia</label>
        {Object.entries(initialOrderExtras).map((option) => (
          <div key={option[0]}>
            <input
              type="checkbox"
              id={option[0]}
              value={option[1].state}
              checked={orderExtras[option[0]].state}
              onChange={(e) =>
                setOrderExtras({
                  ...orderExtras,
                  [option[0]]: {
                    title: option[1].title,
                    state: e.target.checked,
                  },
                })
              }
            />
            <label className="basicForm-radio-label" htmlFor={option}>
              {option[1].title}
            </label>
          </div>
        ))}
      </div>
      <h2 className="basicForm-header">Dane do realizacji zamówienia</h2>

      <div className="basicForm-flex-column">
        <label htmlFor="name" className="basicForm-label">
          Imię i nazwisko*
        </label>
        <input
          type="text"
          id="name"
          value={name}
          placeholder="wpisz swoje imię i nazwisko"
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="basicForm-flex-column">
        <label htmlFor="nickname" className="basicForm-label">
          Twój pseudonim*
        </label>
        <input
          type="text"
          id="nickname"
          value={nickname}
          placeholder="wpisz swój pseudonim"
        />
      </div>
      <div className="basicForm-flex-column">
        <label htmlFor="address" className="basicForm-label">
          Adres do wysyłki*
        </label>
        <input
          type="text"
          id="address"
          placeholder="adres na który mamy wysłać zamówienie"
        />
      </div>
      <div className="basicForm-flex-column">
        <label htmlFor="email" className="basicForm-label">
          Adres e-mail*
        </label>
        <input type="text" id="email" placeholder="jan.kowalski@gmail.com" />
      </div>
      <div className="basicForm-flex-column">
        <label htmlFor="phone" className="basicForm-label">
          Numer kontaktowy*
        </label>
        <input type="text" id="phone" placeholder="+48 888 888 888" />
      </div>

      <input
        className="basicForm-submit-btn"
        type="submit"
        value="SKŁADAM ZAMÓWIENIE"
      />
    </form>
  );
};
