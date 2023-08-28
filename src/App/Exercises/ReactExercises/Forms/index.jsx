import React, { useState } from 'react';
import './style.css';

export const Forms = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [comment, setComment] = useState('');
  const [payment, setPayment] = useState('');
  const [optIn, setOptIn] = useState(false);
  const [course, setCourse] = useState('');

  function handleOnSubmit(e) {
    e.preventDefault();
    console.log('IS PASSWORD THE SAME:', password === password2);
    const data = {
      username: name,
      email,
      password,
      comment,
      payment,
      optIn,
      course,
    };
    console.log('DATA TO BE SUBMIT', data);
    console.log('FORM SUBMITTED');
  }

  return (
    <>
      <form onSubmit={handleOnSubmit} className="forms-wrapper">
        <label htmlFor="course-field">Choose your course:</label>
        <select
          id="course-filed"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">--Please choose an option--</option>
          <option value="frontend">Frontend course</option>
          <option value="backend">Backend course</option>
          <option value="devops">DevOps course</option>
        </select>
        <label htmlFor="name-field">Name:</label>
        <input
          id="name-field"
          type="text"
          value={name}
          placeholder="Write your name"
          onChange={(e) => setName(e.target.value)}
        />
        {/* <p>Current name: {name || '(empty)'}</p> */}
        <label htmlFor="email-field">Email:</label>
        <input
          id="email-field"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {/* <p>Current email: {email || '(empty)'}</p> */}
        <label htmlFor="password-field">Password:</label>
        <input
          id="password-field"
          type="password"
          value={password}
          autoComplete="off"
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <p>Current password: {password || '(empty)'}</p> */}
        <label htmlFor="password2-field">Confirm password:</label>
        <input
          id="password2-field"
          type="password"
          value={password2}
          autoComplete="off"
          onChange={(e) => setPassword2(e.target.value)}
        />
        <label htmlFor="comment-field">Comments:</label>
        <textarea
          id="comment-field"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <fieldset>
          <legend>Choose your payment method</legend>
          <input
            type="radio"
            value="blik"
            id="payment-blik"
            checked={payment === 'blik'}
            onChange={(e) => setPayment(e.target.value)}
          />
          <label htmlFor="payment-blik">blik</label>
          <input
            type="radio"
            value="paypal"
            id="payment-paypal"
            checked={payment === 'paypal'}
            onChange={(e) => setPayment(e.target.value)}
          />
          <label htmlFor="payment-paypal">paypal</label>
        </fieldset>
        <fieldset>
          <legend>Newsletter</legend>
          <input
            type="checkbox"
            id="opt-in-newsletter"
            checked={optIn}
            onChange={(e) => setOptIn(e.target.checked)}
          />
          <label htmlFor="opt-in-newsletter">
            Yes, I would like to join newsletter
          </label>
        </fieldset>

        <button>Submit</button>
      </form>
    </>
  );
};
