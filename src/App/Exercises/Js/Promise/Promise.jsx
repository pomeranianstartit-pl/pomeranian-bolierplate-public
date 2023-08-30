import React, { useEffect, useState } from 'react';
import './style.css';

export function Promise() {
  // const getUser = () =>{
  //   return new Promise((resolve, reject) =>{
  //     const user = { name: 'Łukasz', surname: 'Formela' };
  //     resolve(user);
  //   })
  // }
  // const myFun1 = async () => {
  //   try {
  //     const { name } = await getUser();
  //     console.log(name);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  // const myFun2 = async () => {

  //   try {
  //     const user = await getUser();
  //     console.log(user);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };
  // myFun1();
  const [name, setName] = useState('');
  const [errors, setErrors] = useState([]);

  useEffect(() => {
    if (name.length > 10)
      setErrors((prevErrors) => [...prevErrors, 'Takie imię jest za długie']);
    else {
      setErrors([]);
    }
  }, [name]);

  return (
    <div>
      <div style={{ color: errors.length > 0 ? 'red' : 'gray' }}>
        Your name is : {name}
      </div>
      <br />
      <input
        type="text"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <br />
      {errors.map((error) => (
        <span>{error}</span>
      ))}
    </div>
  );
}
