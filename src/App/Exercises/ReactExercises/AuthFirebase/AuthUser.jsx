import { Register } from './Register';
import { Login } from './Login';
import { useState } from 'react';

export const AuthUser = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      {toggle ? (
        <Login goToRegister={() => setToggle(!toggle)} />
      ) : (
        <Register goToLogin={() => setToggle(!toggle)} />
      )}
    </div>
  );
};
