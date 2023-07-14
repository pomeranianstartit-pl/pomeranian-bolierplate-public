import React, { useEffect, useState } from 'react';
import './styles.css';

export function Exercise4() {
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(true);
  
  useEffect(() => {
    const timeout1 = setTimeout(() => {
      setVisible1(false);
    }, 2000);

    const timeout2 = setTimeout(() => {
      setVisible2(false);
    }, 4000);

    return () => {
      clearTimeout(timeout1);
      clearTimeout(timeout2);
    };
  }, []);

  return (
    <div>
      <h4 style={{ textAlign: 'left' }}>Znikające boxy po załadowaniu strony</h4>
      {visible1 && <div className="box">Box 1</div>}
      {visible2 && <div className="box">Box 2</div>}
    </div>
  );
}





