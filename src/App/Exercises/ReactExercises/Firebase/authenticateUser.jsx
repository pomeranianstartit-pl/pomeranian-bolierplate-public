import { useState } from 'react';
import { LogIn } from './LogIn';
import { Register } from './Register';

export const AuthenticateUser = () => {
  const [toggleLogIn, setToggleLogIn] = useState(true);
  return (
    <div>
      {toggleLogIn ? (
        <LogIn setToggleLogIn={() => setToggleLogIn(!toggleLogIn)} />
      ) : (
        <Register setToggleLogIn={() => setToggleLogIn(!toggleLogIn)} />
      )}
    </div>
  );
};
