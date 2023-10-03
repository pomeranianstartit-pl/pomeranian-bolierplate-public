import { useState, useEffect } from 'react';

const useContactInfo = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  useEffect(() => {
    setEmail('adam.karcz.1984@gmail.com');
    setPhone('+48-506-088-756');
  }, []);

  return { email, phone };
};

export default useContactInfo;
