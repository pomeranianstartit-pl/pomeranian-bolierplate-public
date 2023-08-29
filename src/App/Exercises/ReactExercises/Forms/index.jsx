import React, { useState } from 'react';
import './style.css';

const initialCourseTopics = {
  css: {
    title: 'CSS advanced',
    state: false,
  },
  javascript: {
    title: 'Javascript advanced',
    state: false,
  },
  react: {
    title: 'React',
    state: false,
  },
  git: {
    title: 'GIT',
    state: false,
  },
};

export const Forms = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [comment, setComment] = useState('');
  const [payment, setPayment] = useState('');
  const [optIn, setOptIn] = useState(false);
  const [course, setCourse] = useState('');
  const [courseTopics, setCourseTopics] = useState(initialCourseTopics);
  const [duration, setDuration] = useState(90);
  const [theme, setTheme] = useState('#FE3756');

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
      courseTopics,
      duration,
      theme,
    };
    console.log('DATA TO BE SUBMIT', data);
  }

  return (
    <>
      <form onSubmit={handleOnSubmit} className="forms-wrapper">
        <label htmlFor="course-field">Choose your course:</label>
        <select
          className="forms-select"
          id="course-filed"
          value={course}
          onChange={(e) => setCourse(e.target.value)}
        >
          <option value="">--Please choose an option--</option>
          <option value="frontend">Frontend course</option>
          <option value="backend">Backend course</option>
          <option value="devops">DevOps course</option>
        </select>
        <fieldset className="forms-multi-checkbox">
          <legend>Choose topics</legend>

          {Object.entries(initialCourseTopics).map((option) => (
            <div key={option[0]}>
              <input
                type="checkbox"
                id={option[0]}
                value={option[1].state}
                checked={courseTopics[option[0]].state}
                onChange={(e) =>
                  setCourseTopics({
                    ...courseTopics,
                    [option[0]]: {
                      title: option[1].title,
                      state: e.target.checked,
                    },
                  })
                }
              />
              <label htmlFor={option}>{option[1].title}</label>
            </div>
          ))}
        </fieldset>
        <label htmlFor="duration-range">
          Course duration - {duration} days
        </label>
        <input
          type="range"
          id="duration-range"
          min={30}
          max={360}
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
        />
        <label htmlFor="theme">Choose your course theme - {theme}</label>
        <input
          type="color"
          id="theme"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
        />
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
