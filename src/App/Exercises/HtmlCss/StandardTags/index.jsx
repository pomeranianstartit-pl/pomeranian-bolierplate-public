import './styles.css';

export function StandardTags() {
  return (
    <div>
        <div className="original-tags">
            <h1>Tytuł</h1>
            <small>05.2023</small>
            <h3>H<sub>2</sub>O is good for you</h3>
            <p>Staying <b>hydrated</b> is one of the best things you can do for your overall health. Staying <b>hydrated</b> can help support physical performance, prevent headaches and constipation, and more.</p>
            
            <h3>25<sup>th</sup> birthday</h3>
            <p>Make the next birthday you celebrate a special one with a hand-picked happy birthday <q>quote</q> or wish that will surely make that special someone’s day a great day. Whether you’re celebrating your birthday or someone else’s, you can rely on our list of <i>happy birthday</i> <q>quotes</q> to help put a smile on someone’s face. From inspirational to funny to cute sayings, browse our list of <q>quotes</q> to find one that resonates with you. <del>Nothing</del> can stop you!</p>
            
            <h3>Why not to use <ins>lists</ins> ?</h3>
            <p> <h5>A lot of things to do <i>#todo</i></h5> <ul> <li>Todo 1</li> <li>Todo 2</li> <li>Todo 3</li> </ul></p>
        </div>

        {/* -------------- FEJKOWE KLASY -------------- */}


        <div className="faked-tags">
            <div className='headline1'>Tytuł</div>
            <span className='date'>05.2023</span>
            <div className='headline3'>
                H<span className='sub-text'>2</span>O is good for you
            </div>
            <div>
                Staying <span className='bold-text'>hydrated</span> is one of the best things you can do for your overall health. Staying <span className='bold-text'>hydrated</span> can help support physical performance, prevent headaches and constipation, and more.
            </div>
            
            <div className='headline3'>
                25<span className='sup-text'>th</span> birthday
            </div>
            <div>
                Make the next birthday you celebrate a special one with a hand-picked happy birthday <span className='q-text'>quote</span> or wish that will surely make that special someone’s day a great day. Whether you’re celebrating your birthday or someone else’s, you can rely on our list of <span className='i-text'>happy birthday</span> <span className='q-text'>quotes</span> to help put a smile on someone’s face. From inspirational to funny to cute sayings, browse our list of <span className='q-text'>quotes</span> to find one that resonates with you. <span className='deleted-text'>Nothing</span> can stop you!
            </div>
            
            <div className='headline3'>
                Why not to use <span className='underline'>lists</span> ?
            </div>

            <div> 
                <div className='headline5'>
                    A lot of things to do <span className='i-text'>#todo</span>
                </div> 
                <div className='ul'> 
                    <span className='li'>Todo 1</span> 
                    <span className='li'>Todo 2</span> 
                    <span className='li'>Todo 3</span> 
                </div>
            </div>
        </div>
    </div>
  )
}
