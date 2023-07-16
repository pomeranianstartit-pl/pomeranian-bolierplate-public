import { useState } from 'react';

export function SingleQuestion({ question, answer }) {
    const [visible, setVisible] = useState(true);
    console.log('Kliknięto');

    function onClickHandle() {
        console.log('jaka wartosc', visible);
        setVisible(!visible);
    }
    return (
        <div>
            <section className="question-section" onClick={onClickHandle}>
                <h2 className="question-header">{question}</h2>
                {visible && (
                    <div className="question.answer">
                        <hr /> <p>{answer}</p>
                    </div>
                )}
            </section>
        </div>
    );
}
