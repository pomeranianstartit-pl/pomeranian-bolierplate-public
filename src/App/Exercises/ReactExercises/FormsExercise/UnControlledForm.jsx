import { forwardRef, useRef } from 'react';

export const UnControlledForms = () => {
  const handleOnSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
    console.log(myRef?.current);
    console.log(myRef?.current.value);
    myRef.current.value = 'Bye bye';
    console.log('Event target:', event.target);
    for (const element of event.target) {
      console.log();
    }
  };

  const myRef = useRef(null);

  return (
    <div>
      <h2>Controlled form</h2>
      <form onSubmit={handleOnSubmit}></form>
      <input name="with-ref" type="text" ref={myRef} />
      <input name="without-ref" type="text" />
      <button type="submit">Submit</button>
    </div>
  );
};
