import './styles.css';

export const DOMuseRef = () => {
  // DOM - Document Object Model

  // SELECTORY DOM:
  // document.getElementById('id') - zwraca element o danym id
  // document.getElementsByClassName('class') - zwraca listę (nie jest to tablica !! tylko
  //                                            nodelist/htmlCollection) elementów o danej klasie
  // document.getElementsByTagName('tag') - zwraca listę elementów o danym tagu
  // document.querySelector('selector') - zwraca pierwszy element pasujący do selektora
  // document.querySelectorAll('selector') - zwraca listę elementów pasujących do selektora
  return (
    <div>
      <div onClick={(e) => console.log(e)} id="domElement">
        To jest konkretny div z danym id: domElement
      </div>
      DOM use Ref
    </div>
  );
};
