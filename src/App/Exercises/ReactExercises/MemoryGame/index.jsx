import React, { useState } from "react";

import { StartMenu } from "./components/StartMenu";
import { GameMenu } from "./components/GameMenu";
import { Playground } from "./components/Playground";

export const Exercise = () => {
    const [isGameStarted, setIsGameStarted] = useState(false);
    const [boardSize, setBoardSize] =useState(16);
    const handleStart = () => {
        setIsGameStarted(true);
    };

    const handleStop = () => {
        setIsGameStarted(false);
    }

    return ( 
    <div>
        <h1>memo game</h1>
        {/* {<StartMenu />} */}
        <div>
            {!isGameStarted && <StartMenu setBoardSize={setBoardSize} startGame={handleStart} />}
            {isGameStarted && (
            <>
            <GameMenu endGame={handleStop}/>
            <Playground boardSize={boardSize}/>
            </>
                )}
        </div>
    </div>
    ); 
};