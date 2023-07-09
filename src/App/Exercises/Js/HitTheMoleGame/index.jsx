import React, { useState, useEffect } from 'react';
import './styles.css';
import MoleGameBoard from './Board';
import MoleGameSettings from './Settings';

const CountdownTimer = ({ countdown }) => {
    return (
        <div>
            <p>time remaining: {countdown} seconds</p>
        </div>
    );
};
const Exercise = () => {

    const defaultGameTime = 2 * 60 * 1000;
    const moleSpeed = 1000;
    const [gameTime, setGameTime] = useState(defaultGameTime);
    const [seconds, setSeconds] = useState(gameTime / 1000);

    const [moleCount, setMoleCount] = useState(1);
    const [score, setScore] = useState();
    const [scoreCount, setScoreCount] = useState(0);
    const [moleArray, setMoleArray] = useState(Array(10).fill({ isVisible: false, isWhacked: false }));
    const [gameStarted, setGameStarted] = useState(false);
    const [countdown, setCountdown] = useState(seconds);    
    useEffect(() => {
        setSeconds(gameTime / 1000);
    }, [gameTime]);

    useEffect(() => {
        setCountdown(seconds)
      if (gameStarted) {
        let interval;
        if (!interval) {
            interval = setInterval(() => {
                setCountdown((prevCountdown) => prevCountdown - 1);
                console.log(countdown);
            }, 1000);
        }
        return () => {
            clearInterval(interval);
        };
      }
        
    }, [seconds, gameStarted]);
    
    // useEffect(() => {

    //     let intervalId;

    //     if (!intervalId) {
    //         intervalId = setInterval(() => {
    //             setSeconds(seconds - 1);
    //         }, 1000);
    //     }
    //     console.log(seconds.toString().padStart(2, 0));
    //     return () => clearInterval(intervalId);
    // }, [seconds]);

    useEffect(() => {

        let intervalId;

        if (!intervalId) {
            intervalId = setInterval(() => {
                showRandomMole();
            }, moleSpeed);
        }
        console.log(seconds.toString().padStart(2, 0));
        return () => clearInterval(intervalId);
    }, [seconds]);


    function hitTheMole(index) {
        if (!moleArray[index].isVisible) return;
        moleArray[index].isWhacked = !moleArray[index].isWhacked;
        if (moleArray[index].isVisible) {
            setScoreCount(scoreCount + 1);
            setMoleArray((prevValue) => {
                const newArray = [...prevValue];
                newArray[index].isVisible = false;
                return newArray;
            });
        }
    }

    function showRandomMole () {
        function getRandomIntInclusive(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1) + min); }

            const random = getRandomIntInclusive(0, moleArray.length - 1);
        
        setMoleArray(previousMoleArray => 
            previousMoleArray.map((mole, index) => {
                const updatedMole = {...mole}
            updatedMole.isVisible = index === random;
            return updatedMole;
        })
        );
    }
    console.log(gameStarted);
    return (
        <>
            <MoleGameSettings 
            /*seconds={seconds} 
            setSeconds={setSeconds} */
            gameTime={gameTime} 
            moleCount={moleCount} 
            setGameTime={setGameTime} 
            setMoleCount={setMoleCount} 
            startStopGame={() => setGameStarted((prev) => !prev)}
            gameStarted={gameStarted}
        />

        {gameTime !== seconds && seconds !== 0 ? (
            <MoleGameBoard 
            moleArray={moleArray} 
            hitTheMole={hitTheMole} 
            scoreCount={scoreCount} 
            />
            ) : null}

            {/* <button onClick={() => showRandomMole ()}>Pokaż kreta</button> */}
            <CountdownTimer countdown={countdown}/>
        </>
    );
}

export default Exercise;
