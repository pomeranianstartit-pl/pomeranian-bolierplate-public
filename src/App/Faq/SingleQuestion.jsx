import { useState } from 'react';

export function SingleQuestion({ question, answer }) {

    const [visible, setVisible] = useState();
    function handlerOnClick() {

        console.log('klikniete');
        setVisible(!visible)
    }

    return (
        <section className='question-section' onClick={handlerOnClick}>
            <h2>{question}</h2>

            {visible &&
                <div className='answer-section'><p> {answer}</p><hr />
                </div>}
        </section>
    );
}
