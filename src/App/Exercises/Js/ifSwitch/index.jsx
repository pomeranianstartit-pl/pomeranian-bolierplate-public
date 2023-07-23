import './styles.css';

export function ifSwitch() {
  // --------------------------------------------------------------------
  // SIMPLE IF
  // --------------------------------------------------------------------

  if (true) {
    console.log('Ten kod się wywoła!!');
  }

  // --------------------------------------------------------------------
  // IF WITH ELSE
  // --------------------------------------------------------------------

  const isRainy = true;
  const isSunny = false;

  if (isRainy) {
    console.log('Weź parasolkę!');
  } else if (isSunny) {
    console.log('Weź okulary przeciwsłoneczne');
  } else {
    console.log('Pogoda jest ok');
  }

  // SHORTEN IF
  if (isRainy) console.log('Weź parasolkę');
  if (isSunny) console.log('Weź okulary przeciwsłoneczne');
  if (!isRainy && !isSunny) console.log('Pogoda jest ok');

  const getWeatherMessage = (isRainy, isSunny) => {
    // Early return
    if (isRainy) {
      return 'Weź parasolkę';
    }

    if (isSunny) {
      return 'Weź okulary przeciwsłoneczne';
    }

    return 'Pogoda jest ok.';
  };

  console.log(getWeatherMessage(isRainy, isSunny));

  // TERNARY OPERATOR
  const age = 18;

  // if (age >= 18) {
  //   console.log('Jesteś pełnoletni/pełnoletnia');
  // } else {
  //   console.log('Jesteś za młody/za młoda!');
  // }

  const isAdult =
    age >= 18
      ? console.log('Jesteś pełnoletni/pełnoletnia')
      : console.log('Jesteś za młody/za młoda!');

  // --------------------------------------------------------------------
  // SWITCH
  // --------------------------------------------------------------------
  const dayOfWeek = 'Monday';

  switch (dayOfWeek) {
    case 'Monday':
      console.log('Poniedziałek');
      break;
    case 'Tuesday':
      console.log('Wtorek');
      break;
    default:
      console.log('Inny dzień tygodnia');
  }

  return (
    <div>
      {age >= 18
        ? 'Jesteś pełnoletni/pełnoletnia'
        : 'Jesteś za młody/za młoda!'}

      {age >= 18
        ? 'Jesteś pełnoletni/pełnoletnia'
        : 'Jesteś za młody/za młoda!'}
    </div>
  );
}
