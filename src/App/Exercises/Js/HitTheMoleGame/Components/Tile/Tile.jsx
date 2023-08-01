import './styles.css';

import { useState } from 'react';

export const Tile = ({ hasMole, variant = 'correct', onClick }) => {
    if (
        !(variant === 'correct' || variant === 'incorrect' || variant === 'neutral')
    )
        console.warn('błedny paramametr variant', variant);

    let moleClass = '';
    if (hasMole) { moleClass = 'mole-tile--has-mole' };
    return (
        <div className={`mole-tile mole-tile--${variant} ${moleClass}`} onClick={onClick} />
    );
};
