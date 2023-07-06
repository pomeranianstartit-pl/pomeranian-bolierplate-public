import React, { useState, useEffect } from 'react';
import './style.css';
import startTimer from './Timer';

const MoleGameSettings = (seconds, setSeconds, setIsCountingDown, gameTime, setGameTime, moleCount, setMoleCount) => {

    const gameTimeOption = [
        { label: '1 minuta', timeValue: 1 * 60 * 1000 },
        { label: '2 minuty', timeValue: 2 * 60 * 1000 },
        { label: '3 minuty', timeValue: 3 * 60 * 1000 },
    ];
    const moleCountOption = [
        { label: '1 kret' },
        { label: '2 krety' },
        { label: '3 krety' },
    ];

    const handleStartTimer = () => {
        startTimer(seconds, setSeconds, setIsCountingDown);
    };

    useEffect(() => {
        console.log(seconds.toString().padStart(3, 0));
    }, [seconds]);

    return (
        <>
        <div className="moleGameOptions">
            <p>
            Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w którym się pojawił.
            </p>

            <div className="gameOptionsButtons">
            <div className="gameButtonsRows">
                <div>
                <h4>CZAS GRY {seconds} Sekund</h4>
                {gameTimeOption.map(({ label, timeValue }) => (
                    <button
                    className={gameTime === timeValue ? 'activeButton' : ''}
                    onClick={() => {
                        setSeconds(timeValue / 1000);
                        setGameTime(timeValue);
                    }}
                    key={label}
                    >
                    {label}
                    </button>
                ))}
                </div>

                <div>
                <h4>LICZBA KRETÓW</h4>

                {moleCountOption.map(({ label }) => (
                    <button
                    className={moleCount === Number(label[0]) ? 'activeButton' : ''}
                    onClick={() => setMoleCount(Number(label[0]))}
                    key={label}
                    >
                    {label}
                    </button>
                ))}
                </div>

                <div>
                <h4>PRZYCISKI STERUJĄCE</h4>

                <button onClick={handleStartTimer}>START</button>
                </div>
            </div>
            </div>
        </div>
        </>
    );
};

export default MoleGameSettings;
