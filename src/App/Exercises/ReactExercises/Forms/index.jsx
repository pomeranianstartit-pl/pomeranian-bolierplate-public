import React, { useRef, useState } from 'react';

export function Forms() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  return (
    <>
      <form>
        <label htmlFor="name-field">Name:</label>
        <input
          id="name-field"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <p>Current name: {name || '(empty)'}</p>
        <label htmlFor="email-firld">Email</label>
        <input
          id="email-firld"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>password</p>
        <label htmlFor="password-firld">password</label>
        <input
          id="password-field"
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>phone</p>
        <label htmlFor="phone-firld">phone</label>
        <input
          id="phone-field"
          type="phone"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </form>
    </>
  );
}
