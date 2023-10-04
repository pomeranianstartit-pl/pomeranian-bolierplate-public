import './styles.css';

export function Exercise() {
  return (
    <div>
      <p className="firstParagraph">To jest pierwszy paragraf</p>
      {/* vertical algin */}
      <div className="text-aligment">
        An{' '}
        <img
          src="https://openseauserdata.com/files/44fc2ae23e2aa64dedff3bcd9fbec1aa.png"
          className="top"
          alt="link"
          width="32"
          height="32"
        />{' '}
        image with a default aligment .
      </div>
      <div className="text-aligment">
        An{' '}
        <img
          src="https://openseauserdata.com/files/44fc2ae23e2aa64dedff3bcd9fbec1aa.png"
          className="bottom"
          alt="link"
          width="32"
          height="32"
        />{' '}
        image with a default aligment .
      </div>

      <ol start="5" reversed>
        <li>Pierwszy element listy</li>
        <li>Drugi element listy</li>
        <li>Trzeci element listy</li>
        <li value={15}>Czwarty element listy</li>
        <li>Trzeci element listy</li>
        <li>Trzeci element listy</li>
      </ol>

      <ul className="text-wrapper">
        <li>Trzeci element listy</li>
        <li>Trzeci element listy</li>
      </ul>
    </div>
  );
}
