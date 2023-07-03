import React, { useEffect, useState } from 'react';
import './style.css';
import BTClogo from './bitcoin.png';

export function BTC2() {
  const [bitcoinPrice, setBitcoinPrice] = useState(null);
  const [usdToPln, setUsdToPln] = useState(null);
  const [convertedPrice, setConvertedPrice] = useState(null);

  useEffect(() => {
    fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,pln')
      .then(response => response.json())
      .then(data => {
        const priceUSD = data.bitcoin.usd.toFixed(2);
        const pricePLN = data.bitcoin.pln.toFixed(2);
        setBitcoinPrice(priceUSD);
        setUsdToPln(pricePLN);
      })
      .catch(error => {
        console.log('Wystąpił błąd:', error);
      });
  }, []);

  useEffect(() => {
    if (bitcoinPrice && usdToPln) {
      const converted = usdToPln * 0.574962;
      setConvertedPrice(converted.toFixed(2));
    }
  }, [bitcoinPrice, usdToPln]);

  const subtractValue = 60000;
  const subtractedPrice = (convertedPrice - subtractValue).toFixed(2);
  const taxedPrice = (subtractedPrice * 0.81).toFixed(2); // Obniżona wartość o 19% podatek

  return (
    <div className="btcApp">
      <header className="btcHeader">
        <img src={BTClogo} className="btcLogo" alt="logo" />
        {bitcoinPrice && (
          <div>
            <p>Cena w USD: {bitcoinPrice}</p>
            {usdToPln && <p>Cena w PLN: {usdToPln}</p>}
            {convertedPrice && <p>Mój BTC w PLN: {convertedPrice}</p>}
            {subtractedPrice && <p>Zysk przed opodatkowaniem: {subtractedPrice}</p>}
            {taxedPrice && <p>Zysk po opodatkowaniu: {taxedPrice}</p>}
          </div>
        )}
      </header>
    </div>
  );
}

export default BTC2;












