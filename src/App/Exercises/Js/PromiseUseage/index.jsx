import { useState } from 'react';
import './styles.css';
import { useEffect } from 'react';

export function Exercise() {
  const [data, setData] = useState();
  const [category, setCategory] =useState();
  const getJokes = async () => {
    try {
      const response = await fetch(`https://api.chucknorris.io/jokes/random`);
      console.log('Response before .json():', response);
      const data = await response.json();
      console.log('Response after .json():', data);
      const joke = data;

      setData(joke);
    } catch (err) {
      console.log(err, 'err');
    }
  };
   
  useEffect(() => {
  console.log('category to fetch', category);
  getJokes(category);
  }, [category]);

  const handleChange= (e) => {
    e.preventDefault();
    console.log(e, 'e from handleClick')
  }

  return (
    <div>
      <p>{data?.value}</p>
 
      <input type='text'value={category} onChange={handleChange}></input>
    </div>
  );
}