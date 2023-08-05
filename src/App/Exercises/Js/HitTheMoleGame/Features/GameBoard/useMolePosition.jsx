import { useEffect, useCallback } from 'react';
import { useState } from 'react';
import { getNewMolePosition } from '../../Utilities';

export function useMolePosition(molesOption) {
    const [molePosition, setMolePosition] = useState();

    const moveRandomly = useCallback(
        (index) => {
            setMolePosition(getNewMolePosition(index, molesOption.tiles));
        },
        [molesOption]
    );

    useEffect(() => {
        setMolePosition(getNewMolePosition(undefined, molesOption.tiles));
    }, [molesOption]);

    useEffect(() => {
        if (molesOption === undefined) return;
        let timeoutId;
        //console.timeEnd('mole-position');
        //console.time('mole-position');
        if (molePosition !== undefined) {
            timeoutId = setTimeout(
                () =>
                    setMolePosition(getNewMolePosition(molePosition, molesOption.tiles)),
                molesOption.timeVisible
            );
        }
        return () => clearTimeout(timeoutId);
    }, [molePosition, molesOption]);

    return [molePosition, moveRandomly];
}
