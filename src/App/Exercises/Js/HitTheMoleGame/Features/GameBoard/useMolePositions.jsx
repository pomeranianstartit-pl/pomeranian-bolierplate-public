import { useCallback, useMemo } from 'react';
import { useMolePosition } from './useMolePosition';
export function useMolePositions(molesOption) {
    const [molePosition1, moveRandomly1] = useMolePosition(molesOption);
    const [molePosition2, moveRandomly2] = useMolePosition(molesOption);
    const [molePosition3, moveRandomly3] = useMolePosition(molesOption);

    const sharedPositions = useMemo(() => {
        switch (molesOption.molesNo) {
            case 1:
                return [molePosition1];
            case 2:
                return [molePosition1, molePosition2];
            default:
                return [molePosition1, molePosition2, molePosition3];
        }
    }, [molePosition1, molePosition2, molePosition3, molesOption.molesNo]);

    const moveRandomly = useCallback(
        (index) => {
            if (molePosition1 === index) moveRandomly1(index);
            if (molePosition2 === index) moveRandomly2(index);
            if (molePosition3 === index) moveRandomly3(index);
        },

        [
            molePosition1,
            molePosition2,
            molePosition3,
            moveRandomly1,
            moveRandomly2,
            moveRandomly3,
        ]
    );
    return [sharedPositions, moveRandomly];
}
