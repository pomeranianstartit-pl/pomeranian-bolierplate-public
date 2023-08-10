Cw. Saved Input -

**część A: makieta**

- dodajmy wszystkie elementy wizualne bez funkcjonalności dodawania
- na podstawie makiety: makieta_1 tworzymy komponent
- tablica która będzie przechowywać nicki ma mieć strukturę: `[{nick: 'xxx', id: 1}, ...]`
- dodajmy 1-3 fakowych rekordów i w ten sposób sprawdźmy czy poprawnie wyświetla się tablica

**część B: dodawanie nicku i wyświetlanie listy**

- oprogramujmy dodawanie nicku do listy obiektów
- dodajmy nową zmienną `idCounter` przez `useState` która będzie się zwiększać za każdym razem gdy dodamy nowy nick do listy
- używamy wartości `idCounter` w dodawaniu nicku do listy

**część C: zapisywanie listy w localStorage**

- w momencie dodawania do nowego nicku do listy:
  - ta powinna zapisać się w localStorage pod kluczem `list-nicki` (jako tablica obiektów)
  - idCounter powinien się zapisać pod kluczem `list-nicki-index` (jako int)
- w momencie odświeżenia strony zarówno tablica jak i idCounter powinny się załadować z localStorage
- przy zapisie i odczycie pamiętać o parsowaniu tablicy

**część D: usuwanie nicków (opcjonalna)**

- po kliknięciu na x nick powinien zostać usunięty z listy
- po usunięciu
- `idCounter` się NIE ZMIENIA

**część E: (opcjonalna)**

- walidacja: nie można dodać 2x tego samego nicku

Snipplets:
const handleAddNick = () => {
// if getNick is just empty string do nothing
if (getNick.trim() === '') {
return;
}
const newNick = {
id: getIdCounter,
name: getNick,
};
setNickList([...getNickList, newNick]);
setIdCounter((prevCounter) => prevCounter + 1);

    setNick('');

};

    setIdCounter((prevCounter) => prevCounter + 1);

**cały kod**
import { useState, useEffect } from 'react';
import './styles.css';

export function LocalStorageSavedInput() {

const LS_NICK_LIST_KEY = 'list-nicki';
const LS_ID_COUNTER_KEY = 'list-nicki-index';

const getLocalStorageParsedValue = (localStorageKey) =>
JSON.parse(localStorage.getItem(localStorageKey));

const [getNickList, setNickList] = useState(
getLocalStorageParsedValue(LS_NICK_LIST_KEY) || []
);

const [getIdCounter, setIdCounter] = useState(
getLocalStorageParsedValue(LS_ID_COUNTER_KEY) || 0
);

// Saving data to Local Storage after changing nickList or idCounter
useEffect(() => {
localStorage.setItem(LS_NICK_LIST_KEY, JSON.stringify(getNickList));
localStorage.setItem(LS_ID_COUNTER_KEY, getIdCounter.toString());
}, [getIdCounter, getNickList]);

const handleAddNick = () => {
// if getNick is just empty string do nothing
if (getNick.trim() === '') {
return;
}
const newNick = {
id: getIdCounter,
name: getNick,
};
setNickList([...getNickList, newNick]);
setIdCounter((prevCounter) => prevCounter + 1);
};

return (

<div>
<input
type="text"
value={getNick}
onChange={(event) => setNick(event.target.value)}
/>
<button onClick={handleAddNick}>Dodaj</button>
<ul>
{getNickList.map((nick) => (
<li key={nick.id}>{nick.name}</li>
))}
</ul>
</div>
);
}
