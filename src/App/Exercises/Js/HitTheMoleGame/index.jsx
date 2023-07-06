import React, { useState, useEffect } from 'react';
import './styles.css';
import MoleGameBoard from './Board';
import MoleGameSettings from './Settings';

const Exercise = () => {

    const defaultGameTime = 2 * 60 * 1000;
    const [gameTime, setGameTime] = useState(defaultGameTime);
    const [moleCount, setMoleCount] = useState(1);
    const [scoreCount, setScoreCount] = useState(0);
    const [moleArray, setMoleArray] = useState(
        Array(10).fill({ isVisible: false, isWhacked: false })
    );

    const [seconds, setSeconds] = useState(gameTime / 1000);

    useEffect(() => {
        let intervalId;

        if (!intervalId) {
            intervalId = setInterval(() => {
                setSeconds(seconds - 1);
            }, 1000);
        }
        console.log(seconds.toString().padStart(2, 0));
        return () => clearInterval(intervalId);
    }, [seconds]);


    function hitTheMole(index) {
        if (!moleArray[index].isVisible) return;
        moleArray[index].isWhacked = !moleArray[index].isWhacked;
        console.log(moleArray[index].isWhacked);
    }

    return (
        <>
            <MoleGameSettings gameTime={gameTime} moleCount={moleCount} setGameTime={setGameTime} setMoleCount={setMoleCount} />
            <MoleGameBoard moleArray={moleArray} hitTheMole={hitTheMole} scoreCount={scoreCount}/>
        </>
    );
};

export default Exercise;
