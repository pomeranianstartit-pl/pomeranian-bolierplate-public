import { useEffect, useState } from 'react';
import { ApiCallExercise } from './ApiCalll';

export function ExerciseTryCatch () {
         const [getPosts, setPosts] = useState();
   
         return (
            <div className='container--try-catch'>
               <ApiCallExercise/>
      </div>
         );
   };