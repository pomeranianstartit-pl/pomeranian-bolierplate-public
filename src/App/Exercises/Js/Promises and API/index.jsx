import React from 'react';
import { ExerciseApiPromises } from './ApiPromises';

export function PromisesExercise() {
  const myFun = async () => {
    const obiecanki = new Promise((resolve, reject) => {
      const user = { name: 'Łukasz', surname: 'Formela' };
      resolve(user);
    });

    try {
      const user = await obiecanki;
      console.log(user);
    } catch (e) {
      console.error(e);
    }
  };

  return <ExerciseApiPromises />;
}
