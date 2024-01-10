import './style.css';

export function Colors() {
  return (
    <div className="cssColors">
      <p>
        Zmianę koloru w CSS ustawia się za pomocą właściwości "color". Jest
        kilka sposobów na przypisanie koloru.
      </p>
      <ul>
        <li>Za pomocą nazwą koloru np. 'color:red'</li>
        <li>Za pomocą rgb np. 'color:rgb(255,255,255)'</li>
        <li>
          Za pomocą rgb oraz opacity(nieprzezroczystość) np.
          'color:rgb(255,255,255,0.5)'
        </li>
        <li>Za pomocą zapisu szestsnatkowym np. 'color:#fff000'</li>
        <li>
          Za pomocą zapisu hsl(opartego na kole), gdzie H-odcień
          barwa,S-nasycenie koloru L-średnie światło białe. np.
          'color:hsl(71deg,81%,53%)'
        </li>
        <li>Za pomocą samego opacity np. 'opacity:0.5'</li>
      </ul>
      <h2 className="color-1">'tekst 1'</h2>
      <h2 className="color-2">'tekst 2'</h2>
      <h2 className="color-3">'tekst 3'</h2>
      <h2 className="color-4">'tekst 4'</h2>
      <h2 className="color-5">'tekst 5'</h2>
      <h2 className="color-6">'tekst 6'</h2>
    </div>
  );
}
