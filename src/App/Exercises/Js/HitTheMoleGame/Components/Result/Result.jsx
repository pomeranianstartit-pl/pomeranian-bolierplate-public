import './styles.css';

import { useState } from 'react';

export const Result = ({ score = 0, duration = 0 }) => {
    return (
        <span className="mole-result">{`Gratulację! Twój wynik to ${score} złapane krety w czasie ${duration} minut!`}</span>
    );
};
