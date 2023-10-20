export const DateTime = () => {
  // timestamp - czas który upłynął od 1 stycznia 1970 roku

  const currentDate = Date.now();

  console.log(currentDate, 'currentDate');

  // iso8601 - 2021-05-12T13:40:00.000Z

  const currentDateObject = new Date();

  console.log(currentDateObject, 'currentDateObject');

  // getFullYear() - rok

  console.log(
    currentDateObject.getFullYear(),

    'currentDateObject.getFullYear()'
  );

  // getMinutes() - minuty

  console.log(currentDateObject.getMinutes(), 'currentDateObject.getMinutes()');

  // toDateString() - minuty

  console.log(
    currentDateObject.toDateString(),

    'currentDateObject.toDateString()'
  );

  // toISOString()() - minuty

  console.log(
    currentDateObject.toISOString(),

    'currentDateObject.toISOString()'
  );

  // parse() - timestamp

  console.log(Date.parse('2021-05-12T13:40:00.000Z'), 'Date.parse()');

  const testDate = new Date('2021-05-12T13:40:00.000Z');

  console.log(testDate, 'testDate');

  // Ile zostało dni do nowego roku

  const currentTimestamp = Date.now();

  const newYearTimestamp = Date.parse('2024-01-01T00:00:00.000Z');

  const difference = newYearTimestamp - currentTimestamp;

  const daysUntilnewYear = Math.floor(difference / (1000 * 60 * 60 * 24));

  console.log(daysUntilnewYear, 'daysUntilnewYear');

  return (
    <div>
      <h2>JS date time methods</h2>
    </div>
  );
};
