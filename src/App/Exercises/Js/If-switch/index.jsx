import './styles.css';

// Boolean
export function Exercise() {
  // --------------------------------------------------------------------
  // SIMPLE IF
  // --------------------------------------------------------------------

  const expression = 2 === 2;

  if (expression) {
    console.log('Jeśli expression === true -> wyświetli console');
  }

  if (expression) console.log('Jeśli expression === true -> wyświetli console');

  // --------------------------------------------------------------------
  // IF ELSE
  // --------------------------------------------------------------------

  const isRainy = true;
  const isSunny = false;

  if (isRainy) {
    console.log('Weź parosolkę!');
  } else if (isSunny) {
    console.log('Weź okulary słoneczne!');
  } else {
    console.log('Pogoda jest ok.');
  }

  if (isRainy) console.log('Weź parosolkę!');
  if (isSunny) console.log('Weź okulary słoneczne!');
  if (!isRainy && !isSunny) console.log('Pogoda jest ok.');

  // --------------------------------------------------------------------
  // TERNARY OPERATOR - (expression) ? (jeśli expression spełniony to zrób to) : (jeśli expression nie jest spełniony to zrób to)
  // --------------------------------------------------------------------

  const age = 18;
  let ageInfoWithIF = '';

  if (age >= 18) {
    ageInfoWithIF = 'Jesteś pełnoletni';
  } else {
    ageInfoWithIF = 'Nie jesteś pełnoletni';
  }

  let ageInfoWithTernaryOperator =
    age >= 18 ? 'Jesteś pełnoletni' : 'Nie jesteś pełnoletni';

  console.log(ageInfoWithIF, ageInfoWithTernaryOperator);
  // EARLY RETURN
  // const isError = true;
  // if (isError) return 'Wystąpił błąd';

  // return <div>Operacje mocno obciążające komputer...</div>;

  const isLoggedIn = true;
  const isError = false;

  // IF'OZA
  // if (isError) {
  //   if (isLoggedIn) {
  //     if (age >= 18) {

  //     }
  //   }
  // }

  //-----------------------------------------------------------------------
  //SWITCH
  //-----------------------------------------------------------------------
  const dayOfWeek = 'Tuesday';

  switch (dayOfWeek) {
    case 'Monday':
      console.log('Dzisiaj jest poniedziałek.');
      break;
    case 'Tuesday':
      console.log('Dzisiaj jest wtorek.');
      break;
    default:
      console.log('Dziś jest inny dzień tygodnia');
  }

  return (
    <div>
      IF
      {/* {isError
        ? 'Wystąpił błąd'
        : isLoggedIn
        ? 'Jesteś zalogowany'
        : 'Nie jesteś zalogowany'} */}
    </div>
  );
}
