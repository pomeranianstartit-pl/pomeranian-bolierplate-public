export const CookieStorage = () => {
  const getCookie = () => {
    const cookies = document.cookie.split(';');
    const cookieData = {};
    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      cookieData[name] = value;
    }
    console.log(document.cookie, cookieData);
  };
  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  }
  const setCookies = () => {
    setCookie('login', 'artur', 1);
    setCookie('email', 'artur@artur.pl', 2);
  };
  return (
    <div>
      <h3>CookieStorage</h3>
      <button onClick={setCookies}>Set cookie</button>
      <button onClick={getCookie}>Get cookie</button>
    </div>
  );
};
