import { useEffect, useState } from "react";
import { generateBoard } from "../../helper";
import './styles.css';

export const Playground = ({ boardSize = 16 }) => {

    const [board, setBoard] = useState(generateBoard(boardSize));
    const [firstClikedId, setFirstClickedId] = useState();
    const [secondClikedId, setSecondClickedId] = useState();

    const handleClick = (id) => {
        const isFirstClickedAndDifferentThanPrevious = firstClikedId && firstClikedId != id;

        if (isFirstClickedAndDifferentThanPrevious) {
            setSecondClickedId(id);
            resetClickedField(setSecondClickedId);

        } else {
            setFirstClickedId(id);
            resetClickedField(setSecondClickedId);

        }
    };

    const resetClickedField = (callback) => {
        setTimeout(() => {
            callback(undefined)

        }, 1000);
    };

    useEffect(() => {
        if (firstClikedId && secondClikedId) {
            const firstFound = board.find(item=> item.id ===firstClikedId);
            const secondFound = board.find(item=> item.id ===secondClikedId) .value;

        // if (firstFound === secondFound) {
        //     setBoard(board.map(field =>{
        //         return{
        //             ...field, 
        //             isPaired: true : false
        //         }
        //     }))
        // }

        }
    }, [firstClikedId, secondClikedId])


    return (<div className='memory-fields'>
        {board.map((id, isPaired, value) => {
            const isClicked = firstClikedId === id || secondClikedId === id;
            const canShowValue = isClicked || isPaired;
            const clickedClassName = isClicked ? 'memory-field--clicked' : '';
            const pairedClassName = isPaired ? 'memory-field--clicked' : '';

            const className = `memory-field ${clickedClassName} ${pairedClassName}`;

            return (
            <div onClick={() => handleClick(id)} className={className}>
                {canShowValue && value}</div>);
        })}
    </div>
    );
};