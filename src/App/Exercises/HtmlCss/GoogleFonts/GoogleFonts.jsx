import React, { useState } from 'react';

import './style.css';

export function GoogleFonts() {
  const [font, setFont]= useState("font-lato")
  const [theme,setTheme]=useState("light-theme")
    function handleFontChange(newFont){
      setFont(newFont);
    }
    function handleThemeChange(newTheme){
      setTheme(newTheme);
    }
  return (
    <div className={theme}>
      <p className={`${font} ${theme}`}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </p>
      <button onClick={() => handleFontChange("font-lato")}>Change font to: Lato </button><br />
      <button onClick={() => handleFontChange("font-poppins")}>Change font to: Poppins </button> <br /><br />
      <button onClick={() => handleThemeChange("light-theme")}>Change theme to: light </button><br />
      <button onClick={() => handleThemeChange("dark-theme")}>Change theme to: dark </button> 
    </div>
  );
}
