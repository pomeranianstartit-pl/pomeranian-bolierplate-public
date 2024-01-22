import { useState } from 'react';
import { LogIn } from './Login';
import { Register } from './Register';

export const AuthenticateUser = () => {
  const [toggleLogIn, setToggleLogIn] = useState(true);
  return (
    <div>
      {toggleLogIn ? (
        <Register setToggleLogIn={() => setToggleLogIn(!toggleLogIn)} />
      ) : (
        <LogIn setToggleLogIn={() => setToggleLogIn(!toggleLogIn)} />
      )}
    </div>
  );
};
