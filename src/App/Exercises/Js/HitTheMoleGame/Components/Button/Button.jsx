import './styles.css';

import { useState } from 'react';

export const Button = ({ value, variant = 'primary', onClick }) => {


    if (!(variant === 'primary' || variant === 'secondary' || variant === 'tertiary'))

        console.warn('błedny paramametr variant', variant);
    return (

        <button className={`mole-button mole-button--${variant}`} onClick={onClick}>{value}</button>

    );
};
