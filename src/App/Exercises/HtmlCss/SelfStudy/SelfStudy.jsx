import './styles.css';

export const SelfStudy = () => {
  const text1 = 'powiększ mnie!';
  console.log(text1.toUpperCase());
  const text2 = 'ZAPISZ MNIE MAŁYMI LITERAMI';
  console.log(text2.toLowerCase());
  const text3 = '$#%#^ wytnij te dziwne znaki na początku!';
  console.log(text3.slice(6));
  const text4 = 'sprawdź, czy zawieram słowo "czy"';
  console.log(text4.includes('czy'));
  const text5 =
    'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"';
  console.log(text5.charAt(2));
  const text6 = 'pies zamień każde słowo pies, na słowo kot pies';
  console.log(text6.replaceAll('pies', 'kot'));
  const text7 = 'podziel, ten, string, od, przecinków';
  console.log(text7.split(','));

  return <div></div>;
};
