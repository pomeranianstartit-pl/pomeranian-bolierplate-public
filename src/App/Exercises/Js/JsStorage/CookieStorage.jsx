export const CookieStorage = () => {
  const getCookie = () => {};
  const setCookie = () => {};
  return (
    <div>
      <h3>CookieStorage</h3>
      <button onClick={setCookie}>Set cookie</button>
      <button onClick={getCookie}>Get cookie</button>
    </div>
  );
};
