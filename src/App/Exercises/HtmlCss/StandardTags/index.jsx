import './styles.css';

export function StandardTags() {
  return (
    <div>
      <div className="original-tags">
        <h1>Tytuł</h1>
        <small>05.2023</small>
        <h3>
          H<sub>2</sub>O is good for you
        </h3>
        <p>
          Staying <b>hydrated</b> is one of the best things you can do for your
          overall health. Staying <b>hydrated</b> can help support physical
          performance, prevent headaches and constipation, and more.
        </p>
        <h3>
          25<sup>th</sup> birthday
        </h3>
        <p>
          Make the next birthday you celebrate a special one with a hand-picked
          happy birthday <q>quote</q> or wish that will surely make that special
          someone’s day a great day. Whether you’re celebrating your birthday or
          someone else’s, you can rely on our list of <i>happy birthday</i>{' '}
          <q>quotes</q> to help put a smile on someone’s face. From
          inspirational to funny to cute sayings, browse our list of{' '}
          <q>quotes</q> to find one that resonates with you. <del>Nothing</del>{' '}
          can stop you!
        </p>
        <h3>
          Why not to use <ins>lists</ins> ?
        </h3>
        <p>
          {' '}
          <h5>
            A lot of things to do <i>#todo</i>
          </h5>
          <ul>
            <li>Todo 1</li>
            <li>Todo 2</li>
            <li>Todo 3</li>
          </ul>
        </p>
      </div>
      <div className="faked-tags">
        <div className="title">Tytuł</div>
        <div className="data">05.2023</div>
        <div className="title">
          H<span className="index_dolny">2</span>O is good for you
        </div>
        <div className="paragraf">
          Staying <span className="pogrubione">hydrated</span> is one of the best things you can do for your
          overall health. Staying <span className="pogrubione">hydrated</span> can help support physical
          performance, prevent headaches and constipation, and more.
        </div>
        <div className="title">
          25<span className="index_gorny">th</span> birthday
        </div> 
        <div className="paragraf">
          Make the next birthday you celebrate a special one with a hand-picked
          happy birthday <span className="cytat">quote</span> or wish that will surely make that special
          someone’s day a great day. Whether you’re celebrating your birthday or
          someone else’s, you can rely on our list of <i>happy birthday</i>{' '}
          <span className="cytat">quotes</span> to help put a smile on someone’s face. From
          inspirational to funny to cute sayings, browse our list of{' '}
          <span className="cytat">quotes</span> to find one that resonates with you. <span className="prekreslone">Nothing</span>{' '}
          can stop you!
        </div>
        <h3>
          Why not to use <ins>lists</ins> ?
        </h3>
        <p>
          {' '}
          <div className="title">
            A lot of things to do <i>#todo</i>
          </div>
          <div className='ul'> 
                    <span className='li'>Todo 1</span> 
                    <span className='li'>Todo 2</span> 
                    <span className='li'>Todo 3</span> 
          </div>
        </p>
      </div>
    </div>
  );
}
