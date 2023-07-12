import './styles.css';
import React, { useState } from 'react';

export function GoogleFonts() {
  const [font, setFont] = useState('Times New Roman');

  function handleChangeFont(newFont) {
    setFont(newFont);
  }

  return (
    <div>
      <p className={`${font}`}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Provident
        distinctio iste dolor quos exercitationem praesentium, facilis
        architecto laboriosam natus, dolores minus? Qui incidunt explicabo
        deserunt veniam tenetur saepe exercitationem corporis?
      </p>

      <p>{font}</p>

      <button onClick={() => handleChangeFont('font-poppins')}>
        Change {font}
      </button>

      <button onClick={() => handleChangeFont('font-caprasimo')}>
        Change {font}
      </button>
    </div>
  );

  // const handleFontChange = (event) => {
  //   setFont(event.target.value);
  // };

  // return (
  //   <>
  //     <div>
  //       <p style={{ fontFamily: font }}>
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sit
  //         alias molestias cupiditate nesciunt officia quis nam explicabo,
  //         eligendi, minima id sapiente dolorum temporibus dolor dolores quidem
  //         cumque vel dolore?
  //       </p>
  //       <button value="Poppins" className="btn-poppins" onClick={handleFontChange}>
  //         Poppins
  //       </button>
  //       <button value="Lato" className="btn-lato" onClick={handleFontChange}>
  //         Lato
  //       </button>
  //     </div>
  //     <hr></hr>
  //     <div>
  //       <label>Wybierz czcionke:</label>
  //       <select value={font} onChange={handleFontChange}>
  //         <option value="Poppins">Poppins</option>
  //         <option value="Lato">Lato</option>
  //       </select>
  //       <p style={{ fontFamily: font }}>
  //         Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit fugit
  //         fuga quia dolore illum, voluptatibus sapiente non harum at beatae
  //         nisi, magnam, et aliquid soluta alias expedita excepturi vel
  //         explicabo.
  //       </p>
  //     </div>
  //   </>
  // );
}
