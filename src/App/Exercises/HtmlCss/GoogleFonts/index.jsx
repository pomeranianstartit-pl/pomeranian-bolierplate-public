import './style.css';
export function GoogleFonts() {
  return (
    <div className="">
      <p>
        Czcionki można znaleźć na stronie{' '}
        <a href="https://fonts.google.com/">https://fonts.google.com/</a>.
        Import czcionek odbywa się w HTML za pomocą 'import' a w CSS importuje
        się czcionki za pomocą @import url('Link z google fonts')
      </p>
      <div className="font-roboto">Roboto Font</div>
      <div className="font-roboto-italic">Roboto Font italic</div>
    </div>
  );
}
