import React from 'react';
import { useState } from 'react';

export function SingleQuestion2({ question2, answer23 }) {

    const [state, setState] = useState()

    function handleOnClick() {

        setState(!state)
    }
    return (

        <section onClick={handleOnClick}>

            <h2 >{question2}</h2>
            <hr />
            {state && <p>{answer23}</p>}
        </section>

    )
}