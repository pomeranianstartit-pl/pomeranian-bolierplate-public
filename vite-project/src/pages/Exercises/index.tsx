import { useState } from 'react';
import { Button } from '../../Components/Button/index';
import { Form } from '../../Components/Form';

export const Exercises = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  return (
    <div>
      <h1>Exercises</h1>
      <div>
        <p>Show me some data in console.log!</p>
        <Button title='Click me!' onClick={() => setIsClicked(!isClicked)} />
        {isClicked && <p>Clicked!</p>}
        <Form/>
      </div>
    </div>
  );
};