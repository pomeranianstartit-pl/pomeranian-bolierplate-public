import './styles.css';

export function StandardTags() {
  return (

//  <p>Styl tagów standardowych</p>


<div class="original-tags">
  <h1>Tytuł</h1>
  <small>05.2023</small>
  <h3>H<sub>2</sub>O is good for you</h3>
  <p>Staying <b>hydrated</b> is one of the best things you can do for your overall health. Staying <b>hydrated</b> can help support physical performance, prevent headaches and constipation, and more.</p>
  <h3>25<sup>th</sup> birthday</h3>
  <p>Make the next birthday you celebrate a special one with a hand-picked happy birthday <q>quote</q> or wish that will surely make that special someone’s day a great day. Whether you’re celebrating your birthday or someone else’s, you can rely on our list of <i>happy birthday</i> <q>quotes</q> to help put a smile on someone’s face. From inspirational to funny to cute sayings, browse our list of <q>quotes</q> to find one that resonates with you. <del>Nothing</del> can stop you!</p>
  <h3>Why not to use <ins>lists</ins> ?</h3>
  <p> <h5>A lot of things to do <i>#todo</i></h5> 
  <ul> <li>Todo 1</li>
   <li>Todo 2</li> 
   <li>Todo 3</li> 
   </ul>
   </p>

<div class="fake-tags">
  <div className='Tytuł'>Tytuł</div>
  <div className='data'>05.2023</div>
  <div className='podtytul'>H<span>2</span>O is good for you</div>
  <div className='Staying'>Staying <span className='hydrated'>hydrated</span> is one of the best things you can do for your overall health. Staying <span className='hydrated'>hydrated</span> can help support physical performance, prevent headaches and constipation, and more.</div>
  <div className='podtytul'>25<span>th</span> birthday</div>
  <div className='Make'>Make the next birthday you celebrate a special one with a hand-picked happy birthday <span>quote</span> or wish that will surely make that special someone’s day a great day. Whether you’re celebrating your birthday or someone else’s, you can rely on our list of <span>happy birthday</span> <span className='quote'>quotes</span> to help put a smile on someone’s face. From inspirational to funny to cute sayings, browse our list of <span>quotes</span> to find one that resonates with you. <span className='kreska'>Nothing</span> can stop you!</div>
  <div className='podtytul'>Why not to use <span className='podkreslenie'>lists</span> ?</div>
  <div> 
    <div className='podtytul2'>A lot of things to do <span>#todo</span></div>
     <div className='unordered-list'> 
      <span className='kropka'>Todo 1</span><br />
      <span className='kropka'>Todo 2</span><br />
       <span className='kropka'>Todo 3</span>
        </div>
        </div>
        </div>


</div>

  )
}






