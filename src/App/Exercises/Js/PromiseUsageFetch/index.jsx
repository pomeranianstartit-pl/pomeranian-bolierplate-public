import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';

export function Exercise() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ title: '', note: '', author: '' });

  // const getData = async () => {
  //   const response = await fetch('http://localhost:3333/api/todo');
  //   const jsonData = await response.json();
  //   console.log(jsonData);
  // };

  const FORM_SCHEMA = { title: '', note: '', author: '' };
  const handleChange = (e, name) => {
    const { value } = e.target;

    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleSendData();
  };
  const handleSendData = () => {
    fetch('http://localhost:3333/api/todo', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(formData),
    }).then(() => {
      setFormData(FORM_SCHEMA);
    });
  };
  // useEffect(() => {
  //   console.log(formData, 'formData');
  // });
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={formData.title}
          onChange={(e) => handleChange(e, 'title')}
        />

        <label htmlFor="note">Note:</label>
        <input
          type="text"
          id="note"
          value={formData.note}
          onChange={(e) => handleChange(e, 'note')}
        />

        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author"
          value={formData.author}
          onChange={(e) => handleChange(e, 'author')}
        />

        <button type="submit">Wyślij</button>
      </form>
    </div>
  );
}
