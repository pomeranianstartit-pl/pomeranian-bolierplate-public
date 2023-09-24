import { useState } from "react";
export function ReactOnChange() {
    const [name, setName] =useState('');

    function handleChange(event) {
        
        if (event.target.value=='Arkadiusz') 
            {setName('Panie Areczku, nie ma takiego imienia.')}
            else{
                setName(event.target.value)
            }               
    }

    return(
         <div>
            <h1>React OnChange</h1>
            <div>
                <input
                onChange={handleChange}
                type="text"
                value={name}
                placeholder="Wpisz swoje imię"/>
            </div>
            <div>Moje imię to {name}</div>
        </div>
        );
}