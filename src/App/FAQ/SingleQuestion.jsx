import { useState } from 'react';

export function SingleQuestion({ question, answer }) {
    const [visible, setVisible] = useState(true);
    function onClickHandle() {
        console.log('jaka wartos', visible);
        setVisible(!visible);
    }
    return (
        <section className="question-section" onClick={onClickHandle}>
            <h2 className="question-header">{question}</h2>

            {visible && (
                <div className="question-answer">
                    <hr />
                    <p>{answer}</p>
                </div>
            )}
        </section>
    );
}
