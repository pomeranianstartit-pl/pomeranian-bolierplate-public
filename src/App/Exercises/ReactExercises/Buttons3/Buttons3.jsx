import React, { useState } from 'react';

export const App2 = () => {
  const [showIframe, setShowIframe] = useState(false);

  const handleClick = () => {
    setShowIframe(!showIframe);
  };

  const handleHideIframe = () => {
    setShowIframe(false);
  };

  return (
    <div>
      <button onClick={handleClick}>
        {showIframe ? 'Ukryj GIF' : 'Pokaż GIF'}
      </button>
      {showIframe && (
        <div>
          <iframe
            src="https://giphy.com/embed/athO1y600y9cufSCGO"
            width="360"
            height="360"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
  
        </div>
      )}
    </div>
  );
};










