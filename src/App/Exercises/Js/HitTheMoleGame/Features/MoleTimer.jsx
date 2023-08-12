import { useState, useEffect } from 'react';
import { formatTime } from '../Utilities';

export function MoleTimer({ duration, handleFinish }) {
    const [timeleft, setTimeLeft] = useState(duration);

    useEffect(() => {
        let timeoutId;
        timeoutId = setInterval(() => setTimeLeft((prev) => prev - 100), 100);
        return () => {
            clearInterval(timeoutId);
        };
    }, []);
    useEffect(() => {
        if (timeleft <= 0) {
            handleFinish();
        }
    }, [handleFinish, timeleft]);
    return formatTime(timeleft);
}
