import './styles.css';

import { useState } from 'react';

export const Output = ({ value }) => {



    return (

        <button className='mole-output'>{value}</button>

    );
};
