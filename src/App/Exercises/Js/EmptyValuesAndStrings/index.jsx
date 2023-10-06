export const EmptyValuesAndStrings = () => {
  let a; // undefined

  const b = null; // null

  console.log(a, b);

  return (
    <ol>
      <li>null == undefined - {String(null == undefined)}</li>

      <li>null === undefined - {String(null === undefined)}</li>

      <li>undefined == true - {String(undefined == true)}</li>

      <li>undefined === true - {String(undefined === true)}</li>

      <li>null == true - {String(null == true)}</li>

      <li>null === true - {String(null === true)}</li>

      <li>{b ? 'null - jestem true' : 'null - jestem false'}</li>

      <li>
        {undefined ? 'undefiend - jestem true' : 'undefiend - jestem false'}
      </li>

      <li>let a; - {String(a)}</li>

      <li>const b = null - {String(b)}</li>
    </ol>
  );
};
