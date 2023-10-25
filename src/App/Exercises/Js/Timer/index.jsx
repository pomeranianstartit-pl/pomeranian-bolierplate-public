import React, { useEffect, useState} from 'react';

export const Timer = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

    const handleClick = () => {
      if (isRunning) setIsRunning(false);
      if (!isRunning) setIsRunning(true);
    };

    useEffect(() => {
        if (!isRunning) return;
        const intervalId = setInterval(() => {
        setCount(count + 1);
        }, 1000);

        return() => {
            clearInterval(intervalId);
        };
    }, [isRunning, count]);

    const handleReset = () => {
        setCount(0);
        setIsRunning(false);

    };


    return (
    <div>
        <div>{count} sec</div>
        <button onClick={handleClick}>{isRunning ? 'Stop' : 'start'}</button>
        <button onClick={handleReset}>Restart</button>

        </div>
        );
    
};