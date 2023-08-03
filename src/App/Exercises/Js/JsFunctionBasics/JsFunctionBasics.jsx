import './styles.css';

//Component 1
function multiplay(factor, ...props) {
  return props.map((number) => (number * factor))
}
export function ExportComponent({ factor }) {


  return <div>{multiplay(factor, 20, 30).join(',')}</div>
}

//Component 2
function multiplayBy10(array) {
  console.log(array)
  return array.map((number) => number * 10);
}

export function ExportComponent2(liczba) {
  console.log(liczba)
  return <div>{multiplayBy10(liczba.liczba)}</div>;
}


export function JsFunctionBasics() {
  function f1() {
    const array1 = [1, 2, 3, 4];

    const multiplayBy2 = (number) => number * 2;

    const wynik = array1.map(multiplayBy2);
    multiplayBy2();
    multiplayBy2(1, 2, 3, 4);

    return {
      wynik: wynik,
    };
  }

  const f2 = () => {
    return { foo: 'bar' };
  };
  const f3 = () => ({ foo: 'bar' });

  const f4 = () => {
    function f5() { }
    return 'funkcja wew';
  };

  //rekurencja

  function rec(number) {
    if (number === 1) {
      return 1;
    }
    return 1 + rec(number - 1);
  }
  //użycie argumentów w funkcji

  function f6(jeden, dwa, trzy) { }

  function sum(...args) {
    let result = 0;

    args.forEach((number) => {
      result = result + number;
    });
    return result;
  }
  // console.log(sum(...args));

  function multiplay(pierwszy, ...rest) {
    return rest.map((el) => el * 2);
  }


  return (
    <>
      <div>
        <code>{JSON.stringify(f1())}</code>
        <code>Funkcja f2: {JSON.stringify(f2())}</code>
        <code>Funkcja f3: {JSON.stringify(f3())}</code>
        <code>Funkcja f4: {JSON.stringify(f4())}</code>
        <code>Funkcja rekurencja rec: {JSON.stringify(rec(5))}</code>
        <code>Argumenty w funcji: {JSON.stringify(sum(1, 2, 3, 4))}</code>
        <code>
          Argumenty czynnik pomijany w funcji:{' '}
          {JSON.stringify(multiplay(1, 2, 3, 4))}
        </code>
      </div>
      <ExportComponent factor={2} />
      <ExportComponent2 liczba={[10, 20]} />
    </>
  );
}
