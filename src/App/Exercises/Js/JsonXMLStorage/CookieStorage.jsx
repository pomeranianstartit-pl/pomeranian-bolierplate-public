export function CookieStorage() {
  const setCookies = () => {
    setCookie('login', 'artur', 1);
    setCookie('email', 'artur@artur.pl', 2);
  };
  // "username=John Smith; expires=Thu, 18 Dec 2013 12:00:00 UTC; path=/";
  const setCookie = (cname, cvalue, exdays) => {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = 'expires=' + d.toUTCString();
    document.cookie = cname + '=' + cvalue + ';' + expires + ';path=/';
  };
  const getCookie = () => {
    const cookies = document.cookie.split('; ');
    const cookieData = {};

    for (const cookie of cookies) {
      const [name, value] = cookie.split('=');
      cookieData[name] = value;
    }
    console.log('cookieData:', cookieData);
    console.log(cookieData.login);
  };

  return (
    <div>
      <h3>Cookie Storage example</h3>
      <button onClick={setCookies}>Save</button>
      <button onClick={getCookie}>Get</button>
    </div>
  );
}
