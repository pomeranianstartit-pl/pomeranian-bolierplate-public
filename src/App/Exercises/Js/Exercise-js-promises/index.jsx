import React, { useEffect, useState } from 'react';

export function JSPromisesExercise () {

    // const myFun = async () => {
    //     const obiecanki = new Promise((resolve, reject)=> {
    //       const user = {name: "Łukasz", surname:"Formela"}
    //       resolve(user);
    //     });
      
    //     try {
    //       const {name} = await obiecanki
    //       console.log(name);
    //     } catch(e) {
    //       console.error(e)
    //     }
    //   }
                            
    //   const myFun = async () => {
    //     const obiecanki = new Promise((resolve, reject)=> {
    //       const user = {name: "Łukasz", surname:"Formela"}
    //       resolve(user);
    //     });             
      
    //     try {
    //       const user = await obiecanki
    //       console.log(user);
    //     } catch(e) {
    //       console.error(e)
    //     }
    //   }

    //   const obiecanki = new Promise((resolve, reject)=> {
    //     const user = {name: "Łukasz", surname:"Formela"}
    //     resolve(user);
    //   }).then((user) => `${user.name} ${user.surname}`).catch(err=>console.error(err))


   const Child = () => {
        const [count, setCount] = useState(0);
        useEffect(() => {
          // Code goes here
      
          const log = () => {
            console.log(count);
          };
      
          return () => log();
        }, [count]);
        return <div>Child</div>;
      };
      
    const Parent = () => {
        const [buttonClickCount, setButtonClickCount] = useState(0);
        useEffect(() => {
          // Code goes here
      
          const log = () => {
            console.log(buttonClickCount);
          };
      
          return () => log();
        }, [buttonClickCount]);
      
        return (
          <div>
            Parent
            {buttonClickCount > 5 && <Child />}
          </div>
        );
      };


    const Parent1 = () => {
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
      };
};