import './styles.css';

export function TryCatchPrototype() {
  function validate(value) {
    console.log('będę walidować wartość:' + value);

    const parseResult = parseInt(value);

    if (isNaN(parseResult)) {
      throw new Error('To nie jest int!');
    }
  }

  const handleInputChange = (event) => {
    const changedValue = event.target.value;

    try {
      validate(changedValue);
    } catch (error) {
      console.log(error);
      document.getElementById('error-text').innerText = error;
    }
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} />
      <div id="error-text"></div>
    </div>
  );
}
