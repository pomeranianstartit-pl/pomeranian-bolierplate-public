// -----------------------------------------------------------------------------
// COOKIES
// -----------------------------------------------------------------------------

export const CookieStorage = () => {
  const setCookie = () => {
    document.cookie =
      'username=John; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/;';
    document.cookie =
      'surname=Doe; expires=Thu, 18 Dec 2024 12:00:00 UTC; path=/;';
    console.log(document.cookie);
  };
  const getCookie = () => {
    const cookies = document.cookie.split('; ');
    const cookieData = {};
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      cookieData[name] = value;
    }

    console.log('cookieData', cookieData);
  };
  return (
    <div>
      <button onClick={setCookie}>Save</button>
      <button onClick={getCookie}>Get</button>
    </div>
  );
};
