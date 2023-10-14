export function DateTime() {
  // time stamp - czas który upłynął od 1 styczniea 1970 roku
  const currentDate = Date.now();

  const currentDateObject = new Date(currentDate);

  console.log(currentDateObject);
  console.log(currentDateObject.getFullYear());
  console.log(currentDateObject.getMinutes());
  console.log(currentDateObject.toDateString(), 'data');
  console.log(currentDateObject.toISOString(), 'iso');

  //  parse()
  console.log(Date.parse('2023-10-14T13:31:29.271Z'), 'Date.parse()');

  const testDate = new Date('2023-10-14T13:31:29.271Z');
  console.log(testDate, 'testDate');

  // Ile zostało dni do nowego roku

  const currentTimeStamp = Date.now();
  const newYearTimeStamp = Date.parse('2024-01-01T00:00:00.000Z');
  const difference = newYearTimeStamp - currentTimeStamp;
  const daysUntilNewYear = Math.floor(difference / (3600 * 24 * 1000));

  console.log(daysUntilNewYear, 'dni do końca roku');
  return <div>JS data time methods</div>;
}
