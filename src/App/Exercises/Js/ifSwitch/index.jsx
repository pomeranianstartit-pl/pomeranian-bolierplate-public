export const Exercise = () => {
  // -------------------------------------------------------
  //
  // IF - instrukcje warunkowe
  //
  // -------------------------------------------------------

  //   if (true) {
  //     console.log('Ten kod wywoła się zawsze bo true!!');
  //   }

  //   if (false) {
  //     console.log('Ten kod się nie wykona bo false!!');
  //   }

  //
  // IF
  //

  const isRainy = true;
  const isSunny = false;

  if (isRainy) {
    console.log('Weź parasol!');
  } else if (isSunny) {
    console.log('Weź okulary przeciwsłoneczne!');
  } else {
    console.log('Pogoda jest ok!');
  }

  //
  // SHORTEN IF
  //

  //   if (isRainy) {
  //     console.log('Weź parasol!');
  //     console.log('Weź parasol dla kolegi/koleżanki!');
  //   }

  if (isRainy) console.log('Weź parasol!');
  if (isSunny) console.log('Weź okulary przeciwsłoneczne!');
  if (!isRainy && !isSunny) console.log('Pogoda jest ok!');

  //
  // TERNARY OPERATOR
  //
  // (warunek) ? 'wykonaj jeśli spełniony warunek' : 'wykonaj jeśli nie spełniony warunek'

  const age = 18;

  //   if (age >= 18) {
  //     console.log('Możesz kupić piwo');
  //   } else {
  //     console.log('Nie możesz kupić piwa');
  //   }

  const isAdultMessage =
    age >= 18 ? 'Możesz kupić piwo' : 'Nie możesz kupić piwa';
  console.log(isAdultMessage);

  // rozszerzenie z kolejnym ternerary operatorem
  const moneyAmount = 0;

  const isAdultMessageExteneded =
    age >= 18
      ? moneyAmount > 0
        ? 'Możesz kupić piwo'
        : 'Nie możesz kupić piwa - nie masz pieniędzy'
      : 'Nie możesz kupić piwa';

  console.log(isAdultMessageExteneded);

  //
  // SWITCH
  //

  const dayOfWeek = 'Środa';

  switch (dayOfWeek) {
    case 'Monday':
      console.log('Poniedziałek');
      break;
    case 'Tuesday':
      console.log('Wtorek');
      break;
    default:
      console.log('Nie znam tego dnia tygodnia');
  }

  //
  // EARLY RETURN
  //

  const getWeatherMessage = (isRainy, isSunny) => {
    // early return
    if (isRainy) {
      return 'Weź parasol!';
    }

    if (isSunny) {
      return 'Weź okulary przeciwsłoneczne!';
    }

    return 'Pogoda jest ok!';
  };

  console.log(getWeatherMessage(true, false));

  return <div>If switch</div>;
};
