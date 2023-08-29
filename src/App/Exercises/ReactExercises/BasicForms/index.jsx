import React, { useState } from 'react';
import './style.css';

export const BasicForms = () => {
  const [payment, setPayment] = useState('');
  const [course, setCourse] = useState('');
  return (
    <div className="basic-forms-wrapper">
      <h1>Zamówienie produktu</h1>

      <label htmlFor="basic-forms-select-label">Wybierz produkt*</label>
      <select
        className="basic-forms-select"
        id="course-filed"
        value={course}
        onChange={(e) => setCourse(e.target.value)}
      >
        <option value="">--Please choose an option--</option>
        <option value="frontend">Frontend course</option>
        <option value="backend">Backend course</option>
        <option value="devops">DevOps course</option>
      </select>
      <fieldset>
        <p>Wybierz formę płatnści</p>
        <input
          type="radio"
          value="blik"
          id="payment-blik"
          checked={payment === 'blik'}
          onChange={(e) => setPayment(e.target.value)}
        />
        <label className="forms-radio-label" htmlFor="payment-blik">
          blik
        </label>
        <input
          type="radio"
          value="paypal"
          id="payment-paypal"
          checked={payment === 'paypal'}
          onChange={(e) => setPayment(e.target.value)}
        />
        <label htmlFor="payment-paypal">paypal</label>
      </fieldset>
      <button>Submit</button>
    </div>
  );
};
