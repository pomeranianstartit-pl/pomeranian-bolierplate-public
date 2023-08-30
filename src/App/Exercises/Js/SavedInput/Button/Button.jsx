import './styles.css';
import { useState } from 'react';

export const Button = ({ value, variant = 'primary', onClick }) => {
    if (
        !(
            variant === 'primary' ||
            variant === 'secondary' ||
            variant === 'tertiary'
        )
    )
        console.warn('błędny parametr variant', variant);
    return (
        <button className={`Mole-Button Mole-Button--${variant}`} onClick={onClick}>
            {value}
        </button>
    );
};
