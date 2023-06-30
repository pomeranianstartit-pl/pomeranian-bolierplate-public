import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';


  // const getData = async () => {
  //   const response = await fetch("http://localhost:3333/api/todo");
  //   const jsonData = await response.json();
  //   console.log(jsonData);
  // }

  
  // useEffect(() => {
  //   getData();
  // }, [])

const API_URL = 'http://localhost:3333/api'
const FORM_SCHEMA = {title: "", note: "", author: ""}

export function Exercise() {
  const [formData, setFormData] = useState(FORM_SCHEMA);

  const handleChange = (e, name) => {
    const { value } = e.target

    setFormData((prevState) => ({...prevState, [name]: value}))
  }

  const handleSendData = () => {
    fetch(`${API_URL}/todo`, {
      method: 'POST', // PUT, DELETE ...
      headers: {
        "Content-type" : "application/json"
      },
      body: JSON.stringify(formData)
    }).then((res) => {
      // res -> przykładowo:
      // {
      //   "id": 9,
      //   "title": "testasdfa",
      //   "note": "asdfasfasfd",
      //   "author": "asdfasfdas",
      //   "isDone": false,
      //   "createdAt": "2023-06-18T08:43:06.701Z"
      // }
      setFormData(FORM_SCHEMA)
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    handleSendData()
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input type="text" id="title" value={formData.title} onChange={(e) => handleChange(e, 'title')}/>

        <label htmlFor="note">Note:</label>
        <input type="text" id="note" value={formData.note} onChange={(e) => handleChange(e, 'note')}/>

        <label htmlFor="author">Author:</label>
        <input type="text" id="author" value={formData.author} onChange={(e) => handleChange(e, 'author')}/>

        <button type='submit'>Wyślij</button>
      </form>
    </div>  
  );
}