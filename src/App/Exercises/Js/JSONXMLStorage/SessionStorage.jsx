import { useState } from 'react';

export const SessionStorage = () => {
  const USER_SESSION_STORAGE = JSON.parse(sessionStorage.getItem('user'));
  const [user, setUser] = useState(USER_SESSION_STORAGE || {});
  const handleSaveData = () => {
    const user = {
      name: 'John',
      age: 30,
    };
    setUser(user);
    sessionStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <div>
      <p>Name: {user?.name}</p>
      <p>Age: {user?.age}</p>
      <button onClick={handleSaveData}>Save user data</button>
    </div>
  );
};
