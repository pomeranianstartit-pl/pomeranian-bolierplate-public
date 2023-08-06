import { useState, useEffect } from 'react';
import { Tile } from '../Tile/Tile';
import { useMolePositions } from './useMolePositions';

const HIGHLIGHT_TIME = 500; //0.5 sekundy

export const GameBoard = ({ tiles, setScore, molesOption }) => {
    // console.log('GameBoard component rendered');
    const [correct, setCorrect] = useState();
    const [incorrect, setIncorrect] = useState();
    const [molePositions, moveRandomly] = useMolePositions(molesOption);

    function getTileVariant(index) {
        if (index === correct) return 'correct';
        if (index === incorrect) return 'incorrect';
        return 'neutral';
    }

    useEffect(() => {
        let timeoutId;
        if (correct !== undefined) {
            timeoutId = setTimeout(() => setCorrect(undefined), HIGHLIGHT_TIME);
        }
        return () => clearTimeout(timeoutId);
    }, [correct]);

    useEffect(() => {
        let timeoutId;
        if (incorrect !== undefined) {
            timeoutId = setTimeout(() => setIncorrect(undefined), HIGHLIGHT_TIME);
        }
        return () => clearTimeout(timeoutId);
    }, [incorrect]);

    function handleTileClick(index) {
        if (
            molePositions &&
            molePositions.some((position) => {
                return position === index;
            })
        ) {
            setCorrect(index);
            setScore((prev) => prev + 1);
            moveRandomly(index);
        } else {
            setIncorrect(index);
            setScore((prev) => prev - 1);
        }
    }

    return (
        <div className="mole-board">
            {tiles.map(({ index }) => (
                <Tile
                    key={index}
                    onClick={() => handleTileClick(index)}
                    hasMole={
                        molePositions &&
                        molePositions.some((position) => {
                            return position === index;
                        })
                    }
                    variant={getTileVariant(index)}
                />
            ))}
        </div>
    );
};
